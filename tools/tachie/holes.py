# Visualize background-colored regions NOT connected to the border, to pick enclosed holes.
import sys
import numpy as np
from PIL import Image, ImageDraw
from scipy import ndimage as ndi

img = np.array(Image.open(sys.argv[1]).convert('RGB')).astype(np.int32)
tol = int(sys.argv[3]) if len(sys.argv) > 3 else 14
H, W, _ = img.shape
edge = np.concatenate([img[0], img[:, 0], img[:, -1]])
bg = np.median(edge[(edge.min(axis=1) > 200)], axis=0)
near = np.abs(img - bg).max(axis=2) <= tol
lab, n = ndi.label(near)
border = set(np.unique(np.concatenate([lab[0], lab[:, 0], lab[:, -1]]))) - {0}
vis = (img * 0.55).astype(np.uint8)
vis[np.isin(lab, list(border))] = (0, 200, 255)
im = Image.fromarray(vis)
sizes = ndi.sum(np.ones_like(lab), lab, index=np.arange(1, n + 1))
coms = ndi.center_of_mass(np.ones_like(lab), lab, index=np.arange(1, n + 1))
for i, (s, c) in enumerate(zip(sizes, coms), start=1):
    if i in border or s < 150:
        continue
    m = lab == i
    arr = np.array(im); arr[m] = (255, 60, 60); im = Image.fromarray(arr)
    ImageDraw.Draw(im).text((c[1] - 8, c[0] - 6), str(i), fill=(255, 255, 0))
    print(i, int(s), (int(c[1]), int(c[0])))
print('bg', bg)
im.save(sys.argv[2])
