"""4x anime-style upscale with Real-CUGAN (runs on CPU via ncnn)."""
import sys
from PIL import Image
from realcugan_ncnn_py import Realcugan

src, dst = sys.argv[1], sys.argv[2]
im = Image.open(src).convert('RGB')
im = Realcugan(gpuid=-1, scale=4, noise=-1, num_threads=4, model='models-se').process_pil(im)
im.save(dst)
print(dst, im.size)
