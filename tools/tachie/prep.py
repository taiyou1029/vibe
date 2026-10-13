import sys
import numpy as np
from PIL import Image

src = np.array(Image.open(sys.argv[1]).convert('RGB'))
out = sys.argv[2]

# (name, crop box, label rects in source coords)
PANELS = {
    'p22': ((0, 689, 259, 1024), [(5, 698, 66, 734)]),
    'p23': ((263, 689, 562, 1024), [(266, 698, 328, 734)]),
    'p24': ((564, 695, 790, 1024), [(568, 699, 610, 718)]),
}
for name, (box, labels) in PANELS.items():
    im = src.copy()
    for (x0, y0, x1, y1) in labels:
        ring = np.concatenate([im[y0 - 3:y0, x0:x1].reshape(-1, 3), im[y1:y1 + 3, x0:x1].reshape(-1, 3),
                               im[y0:y1, x1:x1 + 3].reshape(-1, 3)])
        im[y0:y1, x0:x1] = np.median(ring, axis=0).astype(np.uint8)
    x0, y0, x1, y1 = box
    Image.fromarray(im[y0:y1, x0:x1]).save(f'{out}/{name}.png')
    print(name, x1 - x0, y1 - y0)
