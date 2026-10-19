import { stepHeader, table, lines, checklist, box, opts, fieldRow, weekCard } from '../lib.mjs';

const logTable = (from) => table({
  cols: [
    { label: '日', w: '6%' }, { label: '日付', w: '10%' }, { label: '睡眠<br>（時間）', w: '10%' },
    { label: '肌の調子<br>1〜5', w: '11%' }, { label: '気になる場所・こと', w: '23%' },
    { label: '変えたこと<br>（アイテム・生活）', w: '23%' }, { label: '天気・メモ', w: '17%' },
  ],
  rows: 15,
  index: { from },
  rowHeight: '14.2mm',
});

const week = (title) => weekCard(title, `
  ${fieldRow([['肌の調子の平均', '', '25mm']])}
  <p class="wlabel">調子が良かった日に、共通していたこと</p>${lines(3, '8.5mm')}
  <p class="wlabel">いまいちだった日に、共通していたこと</p>${lines(3, '8.5mm')}
  <p class="wlabel">来週ためすこと（1つだけ）</p>${lines(1, '8.5mm')}
`);

const trial = (n) => box(`アイテム ${n}`, `
  ${fieldRow([['アイテム名', '', '50mm'], ['種類', '', '20mm'], ['使い始めた日', '', '20mm']])}
  ${table({
    cols: [{ label: 'タイミング', w: '16%' }, { label: '肌の調子 1〜5', w: '16%' }, { label: '気づいたこと', w: '68%' }],
    rows: [['1日目'], ['3日目'], ['1週間'], ['2週間']],
    rowHeight: '7.6mm',
  })}
  <p>判定：${opts('続ける・やめる・もう少し様子を見る')}</p>`);

const season = (name) => box(name, `<p class="small">この季節に気をつけたいこと</p>${lines(4)}`);

const chartRows = [5, 4, 3, 2, 1].map((y) =>
  `<tr><td class="y">${y}</td>${'<td></td>'.repeat(30)}</tr>`).join('');
const chartAxis = `<tr><td class="x"></td>${Array.from({ length: 30 }, (_, i) =>
  `<td class="x">${(i + 1) % 5 === 0 || i === 0 ? i + 1 : ''}</td>`).join('')}</tr>`;

export default {
  id: 'hadalog',
  title: '30日 肌ログ・ワークブック',
  shortTitle: '30日 肌ログ・ワークブック',
  theme: { accent: '#b0646f', accentSoft: '#f8eded', accentInk: '#7a3d47', highlight: '#9fb79a' },
  cover: {
    kicker: '30-DAY SKINCARE LOG WORKBOOK',
    title: '30日<br>肌ログ・ワークブック',
    subtitle: 'がんばりすぎないスキンケアを、記録で続ける。',
    points: [
      '今の肌の傾向と、手持ちアイテムを整理する',
      '朝5分・夜10分のルーティンと「最低ライン」を決める',
      '1日1分の肌ログで、調子が変わる理由に気づく',
    ],
    credit: '企画：ミオ（AIで生成したバーチャルキャラクター）',
  },
  previews: [
    { page: 1, caption: '30日 肌ログ・ワークブック' },
    { page: 5, caption: '朝5分・夜10分のルーティン表' },
    { page: 6, caption: '1日1分の肌ログ' },
    { page: 11, caption: '30日の調子をグラフで見る' },
  ],
  pages: [
    // 2: はじめに
    `${stepHeader('はじめに', 'このワークブックの使い方')}
    <p>このワークブックは、スキンケアを「がんばる」のではなく「続ける」ためのものです。
    毎日1分だけ肌の調子を記録すると、調子が良い日・いまいちな日に何が違ったのかが、少しずつ見えてきます。</p>
    <div class="steps4">
      <div class="card"><b>STEP 1</b><strong>今の肌と<br>アイテムを整理</strong><span>目安 15分</span></div>
      <div class="card"><b>STEP 2</b><strong>朝・夜の<br>ルーティンを決める</strong><span>目安 15分</span></div>
      <div class="card"><b>STEP 3</b><strong>30日<br>記録する</strong><span>毎日1分＋週1回5分</span></div>
      <div class="card"><b>STEP 4</b><strong>ふりかえって<br>来月を決める</strong><span>目安 20分</span></div>
    </div>
    ${box('使い方', `<ul>
      <li>印刷して手書きで使えます。タブレットのPDF書き込みアプリでも使えます。</li>
      <li>記録は毎日同じタイミング（夜のスキンケアのあとなど）に書くと続けやすくなります。</li>
      <li>書けなかった日は空欄のままでOKです。次の日からまた書きましょう。</li>
      <li>「肌の調子」は 1＝かなり悪い、3＝ふつう、5＝とても良い くらいの感覚で大丈夫です。</li>
    </ul>`)}
    ${box('ご注意', `<p>このワークブックは、スキンケアの習慣づくりと記録のためのものです。医療的な診断や治療の代わりにはなりません。
    赤み・かゆみ・痛みなどが出たときはすぐに使用をやめ、続く場合は皮膚科に相談してください。新しいアイテムは、パッケージの注意書きをよく読んでから使いましょう。</p>`, 'warn')}
    ${box('このワークブックの内容', `<ul>
      <li>P3–4　STEP 1　今の肌をメモする・手持ちアイテムの棚卸し</li>
      <li>P5　STEP 2　朝・夜のルーティンを決める</li>
      <li>P6–10　STEP 3　30日肌ログ・週次ふりかえり・新アイテムのメモ・生活とのつながり</li>
      <li>P11　STEP 4　30日のふりかえり</li>
    </ul>`, 'tip')}
    ${box('30日の進め方（例）', table({
      cols: [{ label: 'いつ', w: '26%' }, { label: 'やること', w: '74%' }],
      rows: [
        ['始める前', 'STEP 1・2：今の肌とアイテムを整理して、朝・夜のルーティンを決める'],
        ['記録1日目〜', 'STEP 3：毎日1分、肌ログを書く'],
        ['7・14・21日目', '週次ふりかえり（各5分）'],
        ['30日目', '第4週のふりかえり → STEP 4：30日のふりかえりと来月のルーティン'],
      ],
      rowHeight: '9mm',
    }))}`,

    // 3: STEP1 今の肌
    `${stepHeader('STEP 1', '今の肌をメモする', '今の「傾向」を知るためのメモです。正確に分類できなくても大丈夫です。')}
    ${box('観察チェック（当てはまるものに○）', `
      <div class="option-row"><span class="q">洗顔のあと、何もつけずに少し時間がたったとき</span>
        <span class="o">全体がつっぱる</span><span class="o">頬だけつっぱる</span><span class="o">あまり感じない</span></div>
      <div class="option-row"><span class="q">昼ごろの皮脂・テカリ</span>
        <span class="o">顔全体</span><span class="o">Tゾーン（おでこ・鼻）</span><span class="o">あまり気にならない</span></div>
      <div class="option-row"><span class="q">気になること（いくつでも）</span>
        <span class="o">乾燥</span><span class="o">テカリ</span><span class="o">赤み</span><span class="o">毛穴</span><span class="o">ニキビ・吹き出物</span><span class="o">くすみ</span><span class="o">ごわつき</span><span class="o">その他（　　　　）</span></div>
      <div class="option-row"><span class="q">季節による変化</span>
        <span class="o">ある（季節：　　　　）</span><span class="o">あまり感じない</span></div>`)}
    ${table({
      cols: [{ label: '生活のメモ', w: '30%' }, { label: '今の状態', w: '70%' }],
      rows: [['平均の睡眠時間'], ['寝る時間・起きる時間'], ['飲みもの・水分のとり方'], ['気になっている生活習慣']],
      rowHeight: '17mm',
    })}
    ${box('今いちばん気になっていること トップ3', lines(3, '12mm'))}
    ${box('', '<p>肌の状態は、季節や体調、生活リズムでも変わります。ここに書くのは「今の自分の傾向」で十分です。30日後に読み返すと、変化に気づきやすくなります。</p>', 'tip')}`,

    // 4: 手持ちアイテム棚卸し
    `${stepHeader('STEP 1', '手持ちアイテムの棚卸し', '今使っているもの・家にあるものを、全部書き出します。')}
    ${table({
      cols: [{ label: 'アイテム名', w: '30%' }, { label: '種類', w: '17%' }, { label: '開封日', w: '13%' }, { label: '使う時間', w: '14%' }, { label: '続ける？', w: '26%' }],
      example: ['例）○○化粧水', '化粧水', '4/1', '朝・夜', '<b>続ける</b>・やめる・様子見'],
      rows: Array.from({ length: 15 }, () => ['', '', '', opts('朝・夜'), opts('続ける・やめる・様子見')]),
      rowHeight: '12.4mm',
    })}
    ${box('', `<p>種類の例：クレンジング／洗顔／化粧水／乳液・クリーム／美容液／日焼け止め／その他。<br>
    開封後の使用期限は製品によって違います。パッケージやメーカーの案内を確認しましょう。</p>`, 'tip')}`,

    // 5: STEP2 ルーティン
    `${stepHeader('STEP 2', '朝・夜のルーティンを決める', 'ステップを増やすより、毎日続けられる形にすることを優先します。')}
    <div class="cols2">
      ${box('朝のルーティン（目標5分）', table({
        cols: [{ label: '順番', w: '16%' }, { label: 'アイテム', w: '58%' }, { label: '時間', w: '26%' }],
        rows: [['1'], ['2'], ['3'], ['4'], ['5']],
        rowHeight: '11mm',
      }))}
      ${box('夜のルーティン（目標10分）', table({
        cols: [{ label: '順番', w: '16%' }, { label: 'アイテム', w: '58%' }, { label: '時間', w: '26%' }],
        rows: [['1'], ['2'], ['3'], ['4'], ['5']],
        rowHeight: '11mm',
      }))}
    </div>
    ${box('基本の形（例）', `<ul>
      <li>朝：洗顔 → 保湿（化粧水・乳液など） → 日焼け止め</li>
      <li>夜：メイク落とし → 洗顔 → 保湿</li>
    </ul><p class="small">ここに美容液などを足すかどうかは、記録を見ながら決めれば大丈夫です。</p>`, 'tip')}
    ${box('がんばれない日の「最低ライン」', `<p>どんなに疲れていても、これだけはやる：</p>${lines(2, '10mm')}
      <p class="small">例）メイクを落として、保湿だけする。</p>`)}
    ${box('ルーティンを続けるための工夫', checklist([
      'よく使うアイテムを、手に取りやすい場所にまとめた',
      'ルーティンの順番を、洗面所など目に入る場所に貼った',
      '記録する時間を決めた（例：夜のスキンケアのあと）',
    ]))}`,

    // 6–7: 肌ログ
    `${stepHeader('STEP 3', '30日肌ログ（1〜15日目）', '毎日1分。肌の調子と、いつもと違ったことを書きます。')}
    ${logTable(1)}`,

    `${stepHeader('STEP 3', '30日肌ログ（16〜30日目）', '「変えたこと」を書いておくと、調子が変わった理由をあとから探しやすくなります。')}
    ${logTable(16)}`,

    // 8: 週次ふりかえり
    `${stepHeader('STEP 3', '週次ふりかえり', '週に1回、5分だけ。調子の良かった日と、いまいちだった日を比べます。')}
    <div class="weeks">
      ${week('第1週（1〜7日目）')}
      ${week('第2週（8〜14日目）')}
      ${week('第3週（15〜21日目）')}
      ${week('第4週（22〜30日目）')}
    </div>`,

    // 9: 新アイテム
    `${stepHeader('STEP 3', '新しいアイテムを試すときのメモ', '変えるのは一度に1つだけ。合わなかったときに、原因が分かるようにするためです。')}
    ${trial(1)}
    ${trial(2)}
    ${trial(3)}
    ${box('', '<p>次のアイテムを試すのは、しばらく様子を見てから（例：2週間ほど）にしましょう。異常を感じたら、期間に関係なくすぐに使用をやめてください。</p>', 'tip')}`,

    // 10: 生活とのつながり
    `${stepHeader('STEP 3', '肌と生活のつながりメモ', '肌の調子は、スキンケア以外のことにも影響されます。気づいたことをメモします。')}
    ${table({
      cols: [{ label: '項目', w: '27%' }, { label: '気づいたこと', w: '73%' }],
      rows: [['睡眠'], ['食事・飲みもの'], ['ストレス・忙しさ'], ['生理周期（該当する人）'], ['季節・湿度・エアコン'], ['マスク・髪・寝具などのこすれ']],
      rowHeight: '15mm',
    })}
    <h3>季節ごとのメモ</h3>
    <div class="cols2">${season('春')}${season('夏')}${season('秋')}${season('冬')}</div>`,

    // 11: 30日ふりかえり
    `${stepHeader('STEP 4', '30日のふりかえり', '30日分の「肌の調子」を点で打って線でつなぎ、流れを見てみましょう。')}
    ${box('肌の調子グラフ（たて：調子 1〜5／よこ：日）', `<table class="chart">${chartRows}${chartAxis}</table>`)}
    <div class="cols2">
      ${box('続けられたこと', lines(4))}
      ${box('続かなかったこと・その理由', lines(4))}
    </div>
    ${box('来月のルーティン', `<p class="small">朝</p>${lines(2)}<p class="small">夜</p>${lines(2)}<p class="small">来月ためすこと（1つだけ）</p>${lines(1)}`)}`,

    // 12: おわりに
    `${stepHeader('おわりに', '30日間、おつかれさまでした')}
    <div class="letter">
      <p>肌は毎日少しずつ変わるので、記録してはじめて気づけることがたくさんあります。「寝不足の次の日はいまいち」「乾燥する日は早めに保湿すると楽」──そんな小さな発見が、あなたに合うルーティンをつくっていきます。</p>
      <p>30日間で完璧になる必要はありません。続けられたことが1つでもあれば、それが来月の土台です。このPDFは何度でも印刷して使えるので、次の30日もまた一緒に記録していきましょう。</p>
      <p class="sign">ミオ</p>
    </div>
    ${box('次の30日のメモ', lines(12))}
    ${box('このワークブックについて', `<ul class="small">
      <li>企画：ミオ（AIで生成したバーチャルキャラクター）。制作にはAIを利用しています。</li>
      <li>内容は一般的なスキンケア習慣の考え方の紹介です。医療的な診断・治療の代わりにはなりません。</li>
      <li>購入者ご本人の個人利用に限ります。再配布・転売・共有はご遠慮ください。</li>
    </ul>`)}`,
  ],
};
