#!/usr/bin/env bash
# Rebuild assets/hibiki/ (立ち絵 + 顔アイコン) from assets/hibiki/source/sheet.png.
# Needs: Python 3.8-3.12 with realcugan-ncnn-py scipy pillow numpy opencv-python-headless,
#        and libomp5 (apt) for the Real-CUGAN wheel.
set -euo pipefail
cd "$(dirname "$0")"
PY=${PY:-python3}
OUT=../../assets/hibiki
SRC=$OUT/source/sheet.png
TMP=$(mktemp -d)
trap 'rm -rf "$TMP"' EXIT

$PY prep.py "$SRC" "$TMP"
for p in p22 p23 p24; do
  $PY upscale.py "$TMP/$p.png" "$TMP/${p}_x4.png"
done

# --holes: background pockets enclosed by hair (ids from holes.py at the same --tol)
$PY matte.py "$TMP/p22_x4.png" "$OUT/tachie/hibiki_A.png" --holes 3,124
$PY matte.py "$TMP/p23_x4.png" "$OUT/tachie/hibiki_B.png" --holes 4,137,142,168,180
$PY matte.py "$TMP/p24_x4.png" "$OUT/tachie/hibiki_SD.png" --tol 10 --holes 928 --bottom --trim 8
$PY fade.py "$OUT/tachie/hibiki_A.png" "$OUT/tachie/hibiki_A_fade.png"
$PY fade.py "$OUT/tachie/hibiki_B.png" "$OUT/tachie/hibiki_B_fade.png"

$PY faces.py "$SRC" "$OUT/face"
$PY make_preview.py "$OUT"
