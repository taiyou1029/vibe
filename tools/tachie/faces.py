import sys
from PIL import Image
from realcugan_ncnn_py import Realcugan

src = Image.open(sys.argv[1]).convert('RGB')
out = sys.argv[2]
ROWS = [
    ((0, 241), [(0, 236), (241, 460), (465, 684), (689, 910), (915, 1131), (1136, 1336), (1342, 1536)]),
    ((246, 466), [(0, 217), (222, 448), (454, 677), (683, 906), (911, 1110), (1115, 1327), (1333, 1536)]),
    ((471, 688), [(0, 210), (216, 409), (414, 629), (635, 849), (854, 1064), (1070, 1313), (1319, 1536)]),
]
NAMES = ['normal', 'smile', 'wink', 'jitome', 'tsukkomi', 'akire', 'konwaku',
         'tere', 'ikari', 'kanashii', 'odoroki', 'kangaechu', 'fun', 'nemui',
         'shinken', 'niyari', 'doya', 'aseri', 'hiki', 'kiss', 'muhyoujou']
LABEL_H = 24  # panel number + caption strip at the top-left of every panel
up = Realcugan(gpuid=-1, scale=4, noise=-1, num_threads=4, model='models-se')
i = 0
for (y0, y1), cols in ROWS:
    for (x0, x1) in cols:
        w, h = x1 - x0, y1 - y0
        s = min(w, h - LABEL_H)
        cx = x0 + (w - s) // 2
        crop = src.crop((cx, y1 - s, cx + s, y1))
        big = up.process_pil(crop).resize((512, 512), Image.LANCZOS)
        name = f'{out}/face_{i + 1:02d}_{NAMES[i]}.png'
        big.save(name, optimize=True)
        print(name, s)
        i += 1
