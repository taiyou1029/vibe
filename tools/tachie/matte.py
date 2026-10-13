"""Cut a character out of a flat light background.

Flood-fills background-colored pixels from the panel edges (plus listed
enclosed holes), then recovers anti-aliased edges by unmixing each edge pixel
against the background and the nearest solid foreground color.
"""
import argparse
import numpy as np
from PIL import Image
from scipy import ndimage as ndi

ap = argparse.ArgumentParser()
ap.add_argument('src'); ap.add_argument('dst')
ap.add_argument('--tol', type=int, default=14)
ap.add_argument('--holes', default='')
ap.add_argument('--bottom', action='store_true', help='also seed from the bottom edge')
ap.add_argument('--band', type=float, default=3.0)
ap.add_argument('--trim', type=int, default=-1, help='trim to content with this margin (px); -1 keeps canvas')
a = ap.parse_args()

P = np.array(Image.open(a.src).convert('RGB')).astype(np.float32)
H, W, _ = P.shape
edge = np.concatenate([P[0], P[:, 0], P[:, -1]])
B = np.median(edge[edge.min(axis=1) > 200], axis=0)

diff = np.abs(P - B).max(axis=2)
lighter = (P >= B - 3).all(axis=2)          # halos lighter than the backdrop
bglike = (diff <= a.tol) | lighter

lab, n = ndi.label(bglike)
seeds = [lab[0], lab[:, 0], lab[:, -1]] + ([lab[-1]] if a.bottom else [])
bg_ids = set(np.unique(np.concatenate(seeds)).tolist()) - {0}
# holes are numbered with the same labelling as holes.py (plain tol, no halo rule)
if a.holes:
    lab2, _ = ndi.label(diff <= a.tol)
    hole = np.isin(lab2, [int(i) for i in a.holes.split(',')])
else:
    hole = np.zeros((H, W), bool)
M = np.isin(lab, list(bg_ids)) | hole

# drop tiny foreground specks floating in the background
fl, fn = ndi.label(~M)
if fn:
    sizes = ndi.sum(np.ones_like(fl), fl, index=np.arange(1, fn + 1))
    M |= np.isin(fl, np.nonzero(sizes < 40)[0] + 1)

fg = ~M
dist_in = ndi.distance_transform_edt(fg)
solid = dist_in > a.band
_, (iy, ix) = ndi.distance_transform_edt(~solid, return_indices=True)
F = P[iy, ix]

FB = F - B
den = (FB * FB).sum(axis=2)
num = ((P - B) * FB).sum(axis=2)
alpha_band = np.where(den > 400, np.clip(num / np.maximum(den, 1e-6), 0, 1), 1.0)
alpha = np.where(solid, 1.0, np.where(fg, alpha_band, 0.0))

# un-mix edge colors from the backdrop; fall back to the solid neighbour when faint
unmixed = B + (P - B) / np.maximum(alpha, 1e-3)[..., None]
C = np.where((alpha >= 0.5)[..., None], np.clip(unmixed, 0, 255), F)
C = np.where(solid[..., None], P, C)

out = np.dstack([C, alpha * 255]).round().clip(0, 255).astype(np.uint8)
out[alpha == 0, :3] = 0
img = Image.fromarray(out, 'RGBA')
if a.trim >= 0:
    ys, xs = np.nonzero(alpha > 0)
    m = a.trim
    img = img.crop((max(xs.min() - m, 0), max(ys.min() - m, 0), min(xs.max() + 1 + m, W), min(ys.max() + 1 + m, H)))
img.save(a.dst, optimize=True)
print(a.dst, img.size, 'bg', B)
