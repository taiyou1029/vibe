import glob, sys
import numpy as np
from PIL import Image, ImageDraw, ImageFont

base = sys.argv[1]
FONT = '/usr/share/fonts/opentype/ipafont-gothic/ipag.ttf'
f_lab = ImageFont.truetype(FONT, 28)
f_cap = ImageFont.truetype(FONT, 22)
f_name = ImageFont.truetype(FONT, 30)
f_line = ImageFont.truetype(FONT, 34)
JA = ['通常', '笑顔', 'ウィンク', 'ジト目', 'つっこみ', '呆れ', '困惑', '照れ', '怒り', '悲しい', '驚き',
      '考え中', 'ふんっ', 'ねむい', '真剣', 'ニヤリ', 'ドヤ', '焦り', '引き', 'キス顔', '無表情']


def gradient(w, h, top, bottom):
    t = np.linspace(0, 1, h)[:, None, None]
    g = (1 - t) * np.array(top) + t * np.array(bottom)
    return Image.fromarray(np.repeat(g, w, axis=1).astype(np.uint8), 'RGB')


# --- contact sheet -------------------------------------------------------
W = 1920
tachie = [('立ち絵A', 'tachie/hibiki_A.png'), ('立ち絵B', 'tachie/hibiki_B.png'), ('SD', 'tachie/hibiki_SD.png')]
th = 720
top = gradient(W, th + 90, (236, 232, 252), (252, 228, 240))
d = ImageDraw.Draw(top)
ims = []
for lab, p in tachie:
    im = Image.open(f'{base}/{p}').convert('RGBA')
    ims.append((lab, im.resize((round(im.width * th / im.height), th), Image.LANCZOS)))
gap = (W - sum(im.width for _, im in ims)) // (len(ims) + 1)
x = gap
for lab, im in ims:
    top.paste(im, (x, 70), im)
    d.text((x, 22), lab, font=f_lab, fill=(60, 56, 96))
    x += im.width + gap

faces = sorted(glob.glob(f'{base}/face/*.png'))
cell, pad = 250, 16
cols = 7
fw = cols * cell + (cols - 1) * pad
rows = (len(faces) + cols - 1) // cols
bottom = Image.new('RGB', (W, rows * (cell + 40) + 60), (246, 245, 251))
d2 = ImageDraw.Draw(bottom)
x0 = (W - fw) // 2
for i, fp in enumerate(faces):
    cx = x0 + (i % cols) * (cell + pad)
    cy = 30 + (i // cols) * (cell + 40)
    bottom.paste(Image.open(fp).resize((cell, cell), Image.LANCZOS), (cx, cy))
    d2.text((cx, cy + cell + 6), f'{i + 1:02d} {JA[i]}', font=f_cap, fill=(60, 56, 96))
sheet = Image.new('RGB', (W, top.height + bottom.height))
sheet.paste(top, (0, 0)); sheet.paste(bottom, (0, top.height))
sheet.save(f'{base}/preview_sheet.png', optimize=True)

# --- ADV scene mock ------------------------------------------------------
SW, SH = 1280, 720
scene = gradient(SW, SH, (198, 214, 245), (246, 222, 238)).convert('RGBA')
st = Image.open(f'{base}/tachie/hibiki_B_fade.png').convert('RGBA')
sh = 640
st = st.resize((round(st.width * sh / st.height), sh), Image.LANCZOS)
scene.alpha_composite(st, ((SW - st.width) // 2, SH - sh))
box = Image.new('RGBA', (SW - 80, 190), (0, 0, 0, 0))
bd = ImageDraw.Draw(box)
bd.rounded_rectangle((0, 0, box.width - 1, box.height - 1), 18, fill=(30, 28, 54, 215), outline=(255, 170, 214, 255), width=3)
face = Image.open(f'{base}/face/face_06_akire.png').resize((150, 150), Image.LANCZOS)
box.paste(face, (20, 20))
bd.rectangle((20, 20, 169, 169), outline=(255, 170, 214), width=2)
bd.text((195, 22), 'ヒビキ', font=f_name, fill=(255, 190, 224))
bd.text((195, 78), '……先生、何してるの？', font=f_line, fill=(250, 248, 255))
scene.alpha_composite(box, (40, SH - box.height - 24))
scene.convert('RGB').save(f'{base}/preview_scene.png', optimize=True)
print('ok')
