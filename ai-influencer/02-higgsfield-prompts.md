# 02. Higgsfield 用プロンプト

Higgsfieldの画面や機能名は更新で変わることがあります。ここに書いた手順は「やること」の順番として読み、実際のボタン名は画面に合わせてください。

## 作業の流れ

1. **基準画像をつくる**：A-0 / B-0 / C-0 を各4〜8枚生成し、いちばん良い1枚を選ぶ（これが顔の基準になります）
2. **顔を固定する**：キャラクター固定機能（Soul ID など）があれば、基準画像から「角度・表情・服装違い」を20枚ほど作って学習させる。なければ、毎回基準画像を参照画像として入れる
3. **シーン画像をつくる**：各キャラ6枚（A-1〜A-6 など）
4. **動画にする**：シーン画像から5秒動画（image-to-video）を各3本
5. **話す動画をつくる**：基準画像＋台本（`04-posts.md`）で、話す動画（Speak・リップシンク機能など）を作る

## 共通の注意

- **画像に文字を入れない**。AIは日本語の文字が崩れやすいので、文字はあとからInstagramの編集画面やCanva、CapCutで乗せます
- プロンプトは英語のほうが安定しやすいので、英語で書いています。`[same character]` の部分は、キャラ固定機能を使うときはキャラ名に、使わないときは基準画像のプロンプトの人物説明に置き換えます
- 縦長で作ります：フィード・カルーセルは **4:5**、リールは **9:16**
- 生成後に必ず確認すること：指・手の形／背景の文字化け／ブランドロゴの写り込み／実在の人物に似すぎていないか
- 日本語の話す動画は、発音や口の動きが不自然になることがあります。先に1本だけ試して、不自然なら「話す動画」はやめて「映像＋テロップ＋BGM」に切り替えます

**共通ネガティブプロンプト**（入力欄があれば）
```
text, letters, logo, watermark, brand name, extra fingers, deformed hands, blurry, oversaturated, celebrity likeness
```

**キャラ固定用の学習画像（各キャラ20枚ほど）**
```
[same character], [front view / three-quarter left / three-quarter right / side profile],
[neutral / gentle smile / laughing / thinking], [outfit variation],
[soft daylight / warm indoor light / outdoor shade], plain background, photorealistic, vertical 4:5
```

---

## A. ミオ（美容・スキンケア）

**A-0 基準画像**
```
Photorealistic smartphone portrait of an original fictional Japanese woman, 27 years old,
shoulder-length dark brown hair with softly curled-in ends and wispy see-through bangs,
a small beauty mark under her left eye, natural minimal makeup with soft coral lips,
wearing a cream ribbed knit cardigan over a plain white t-shirt, gentle closed-mouth smile,
looking at the camera, soft morning window light, plain warm beige wall background,
natural skin texture, candid Instagram style, vertical 4:5
```

| ID | 用途 | プロンプト |
|---|---|---|
| A-1 | 朝のルーティン | `[same character], standing at a bright minimal bathroom vanity in the morning, holding a plain unlabeled white pump bottle, soft daylight from a window, candid smartphone photo, vertical 4:5` |
| A-2 | 夜のルーティン | `[same character], sitting on a bed in loose light-gray pajamas, gently patting moisturizer on her cheek with her fingertips, warm bedside lamp light, cozy small apartment, vertical 4:5` |
| A-3 | 物撮り（人なし） | `Top-down flat lay of plain unlabeled skincare bottles in white and amber glass, a small open notebook with blank pages, cotton pads and a eucalyptus sprig on a light linen cloth, soft natural daylight, minimal aesthetic, no text, vertical 4:5` |
| A-4 | 記録している | `[same character], sitting at a small wooden desk writing in a notebook, a cup of tea beside her, wearing the cream cardigan, afternoon light, side angle, vertical 4:5` |
| A-5 | 外出 | `[same character], walking on a quiet Tokyo residential street on a sunny spring day, wearing a wide-brim beige hat and a light trench coat, holding a canvas tote bag, natural candid shot, vertical 4:5` |
| A-6 | 手元（顔なし） | `Close-up of a woman's hands with short natural nails holding a plain unlabeled cream jar, soft window light, shallow depth of field, no face, vertical 4:5` |

| ID | 元画像 | 動画プロンプト（5秒） |
|---|---|---|
| A-V1 | A-1 | `She gently pats lotion onto her cheeks, then looks into the camera and smiles softly. Handheld smartphone feel, slow push-in, natural morning light.` |
| A-V2 | A-3 | `Slow top-down camera pan across the items, soft leaf shadows moving gently over the cloth.` |
| A-V3 | A-4 | `She writes a few words in the notebook, pauses, then looks up and smiles. Subtle camera drift, warm afternoon light.` |

**話す動画**：A-0（または `[same character], chest-up, facing the camera, sitting in her room, soft light, vertical 9:16`）＋ `04-posts.md` の台本。声は「落ち着いた20代女性」。

---

## B. ソウタ（宅トレ）

**B-0 基準画像**
```
Photorealistic smartphone portrait of an original fictional Japanese man, 26 years old,
short natural black hair with a textured crop, slim build, thick straight eyebrows,
friendly eyes, clean-shaven, wearing a navy pullover hoodie, relaxed smile,
looking at the camera, small bright studio apartment background with a gray yoga mat
and a potted plant, natural daylight, candid Instagram style, vertical 4:5
```

| ID | 用途 | プロンプト |
|---|---|---|
| B-1 | 始める前 | `[same character], sitting on a gray yoga mat in a small bright apartment, setting a timer on his smartphone, wearing a gray t-shirt and black jogger pants, morning light, vertical 4:5` |
| B-2 | スクワット | `[same character], doing a bodyweight squat on a yoga mat, feet shoulder-width apart, knees pointing the same direction as toes, back straight, side view, small apartment, natural light, vertical 4:5` |
| B-3 | 終わったあと | `[same character], lying on the yoga mat resting after a workout, looking at the ceiling with a satisfied smile, top-down shot, vertical 4:5` |
| B-4 | 在宅ワーク | `[same character], sitting at a desk with a laptop, stretching his arms above his head, work-from-home setting, afternoon light, vertical 4:5` |
| B-5 | 物撮り（人なし） | `Top-down shot of a gray yoga mat, a smartphone with a blank screen, a water bottle and a towel on a light wooden floor, minimal, no text, vertical 4:5` |
| B-6 | 水分補給 | `[same character], drinking water from a bottle by the window after a workout, relaxed, slightly flushed face, vertical 4:5` |

> B-2 はフォームが崩れやすいので、ひざとつま先の向き・背中のラインを必ず確認してください。おかしければ使わずに、テロップの説明だけにします。

| ID | 元画像 | 動画プロンプト（5秒） |
|---|---|---|
| B-V1 | B-1 | `He taps the phone to start a timer, puts it down beside the mat, and stands up. Natural handheld feel.` |
| B-V2 | B-3 | `He breathes out, smiles, and gives a small thumbs-up to the camera. Static camera.` |
| B-V3 | B-4 | `He stretches his arms overhead and rolls his shoulders, then looks at the camera. Subtle camera push-in.` |

**話す動画**：B-0（または `[same character], chest-up, facing the camera, sitting on the yoga mat, natural light, vertical 9:16`）＋台本。声は「明るい20代男性」。

---

## C. ユイ（家計・節約）

**C-0 基準画像**
```
Photorealistic smartphone portrait of an original fictional Japanese woman, 29 years old,
straight black hair in a low ponytail, thin round gold-frame glasses, small silver stud earrings,
wearing a beige blouse, calm confident smile, looking at the camera,
warm desk lamp light, softly blurred bookshelf background, natural skin texture,
candid Instagram style, vertical 4:5
```

| ID | 用途 | プロンプト |
|---|---|---|
| C-1 | 家計を見直す | `[same character], sitting at a wooden desk with an open notebook, a calculator and a cup of coffee, pointing at the notebook with a pen, warm evening lamp light, vertical 4:5` |
| C-2 | 物撮り（人なし） | `Top-down flat lay of a wooden desk with an open notebook with blank ruled pages, a calculator, a pen, a few coins and a small plant, warm light, minimal, no text, vertical 4:5` |
| C-3 | スマホを見る | `[same character], looking at her smartphone with a thoughtful expression on a sofa, wearing a navy cardigan, cozy apartment, evening light, vertical 4:5` |
| C-4 | 買い物 | `[same character], in a supermarket aisle holding a shopping basket, comparing two plain unlabeled products, no logos, natural candid shot, vertical 4:5` |
| C-5 | 週末 | `[same character], drinking coffee by a window on a weekend morning, relaxed smile, wearing a navy cardigan, vertical 4:5` |
| C-6 | 手元（顔なし） | `Close-up of hands writing in a notebook with a pen, a calculator beside it, warm light, shallow depth of field, no readable text, vertical 4:5` |

| ID | 元画像 | 動画プロンプト（5秒） |
|---|---|---|
| C-V1 | C-1 | `She taps the calculator, writes in the notebook, then looks up at the camera and nods. Static camera, warm light.` |
| C-V2 | C-2 | `Slow top-down camera pan across the desk, soft warm light.` |
| C-V3 | C-3 | `She scrolls on her phone, raises her eyebrows slightly, then puts the phone down and smiles. Handheld feel.` |

**話す動画**：C-0（または `[same character], chest-up, facing the camera, sitting at her desk, warm lamp light, vertical 9:16`）＋台本。声は「落ち着いた20代後半の女性」。
