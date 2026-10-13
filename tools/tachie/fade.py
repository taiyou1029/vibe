"""Soften the hard vertical cuts left by the sheet's panel frames."""
import sys
import numpy as np
from PIL import Image

src, dst = sys.argv[1], sys.argv[2]
F = int(sys.argv[3]) if len(sys.argv) > 3 else 72
im = np.array(Image.open(src).convert('RGBA')).astype(np.float32)
H, W, _ = im.shape
x = np.arange(W, dtype=np.float32)
ramp = np.ones(W, np.float32)
for d, touches in ((x, im[:, 0, 3].any()), (W - 1 - x, im[:, -1, 3].any())):
    if touches:
        t = np.clip(d / F, 0, 1)
        ramp *= t * t * (3 - 2 * t)
im[..., 3] *= ramp[None, :]
Image.fromarray(im.round().astype(np.uint8), 'RGBA').save(dst, optimize=True)
print(dst)
