// Builds the workbook PDFs and Instagram preview slides.
// Usage: npm install && npm run build
import { chromium } from 'playwright';
import { mkdir, writeFile } from 'node:fs/promises';
import { fileURLToPath, pathToFileURL } from 'node:url';
import path from 'node:path';
import kakeibo from './content/kakeibo.mjs';
import hadalog from './content/hadalog.mjs';
import takutore from './content/takutore.mjs';

const books = [kakeibo, hadalog, takutore];

const root = path.dirname(fileURLToPath(import.meta.url));
const buildDir = path.join(root, 'build');
const distDir = path.join(root, 'dist');
const previewDir = path.join(distDir, 'previews');

const head = (title) => `<meta charset="utf-8"><title>${title}</title>` +
  [400, 500, 700].map((w) => `<link rel="stylesheet" href="../node_modules/@fontsource/noto-sans-jp/${w}.css">`).join('') +
  '<link rel="stylesheet" href="../style.css">';

const themeVars = (t) =>
  `--accent:${t.accent};--accent-soft:${t.accentSoft};--accent-ink:${t.accentInk};--highlight:${t.highlight};`;

function renderBook(book) {
  const total = book.pages.length + 1;
  const c = book.cover;
  const cover = `<section class="page cover">
    <div class="cover-top">
      <p class="kicker">${c.kicker}</p>
      <h1>${c.title}</h1>
      <p class="subtitle">${c.subtitle}</p>
    </div>
    <div class="panel">
      <h3>このワークブックでできること</h3>
      <ul>${c.points.map((p) => `<li>${p}</li>`).join('')}</ul>
      <div class="meta"><span>${c.credit}</span><span>A4・全${total}ページ</span></div>
    </div>
  </section>`;
  const pages = book.pages.map((html, i) => `<section class="page">${html}
    <footer class="footer"><span>${book.shortTitle}</span><span>${i + 2} / ${total}</span></footer></section>`);
  return `<!doctype html><html lang="ja"><head>${head(book.title)}</head>` +
    `<body style="${themeVars(book.theme)}">${cover}${pages.join('')}</body></html>`;
}

function renderSlide(book, png, caption) {
  return `<!doctype html><html lang="ja"><head>${head(caption)}</head>` +
    `<body style="${themeVars(book.theme)}"><div class="slide">` +
    `<p class="slide-caption">${caption}</p><img src="data:image/png;base64,${png}"></div></body></html>`;
}

// Content must end above the footer; returns the pages where it does not.
async function findOverflow(page) {
  return page.$$eval('.page:not(.cover)', (els) => els.flatMap((el, i) => {
    const pad = parseFloat(getComputedStyle(el).paddingBottom);
    const limit = el.getBoundingClientRect().bottom - pad;
    const bottom = Math.max(...[...el.children]
      .filter((c) => !c.classList.contains('footer'))
      .map((c) => c.getBoundingClientRect().bottom));
    return bottom > limit + 0.5 ? [{ page: i + 2, overBy: Math.round(bottom - limit) }] : [];
  }));
}

await mkdir(buildDir, { recursive: true });
await mkdir(previewDir, { recursive: true });

const browser = await chromium.launch();
const context = await browser.newContext({ viewport: { width: 794, height: 1123 }, deviceScaleFactor: 2 });
let failed = false;

for (const book of books) {
  const htmlPath = path.join(buildDir, `${book.id}.html`);
  await writeFile(htmlPath, renderBook(book));
  const page = await context.newPage();
  await page.goto(pathToFileURL(htmlPath).href);
  await page.evaluate(() => document.fonts.ready);

  const overflow = await findOverflow(page);
  if (overflow.length) {
    failed = true;
    console.error(`${book.id}: content overflows on`, overflow);
  }

  await page.pdf({ path: path.join(distDir, `${book.id}.pdf`), preferCSSPageSize: true, printBackground: true });

  const sections = await page.$$('.page');
  for (const [n, { page: pageNo, caption }] of book.previews.entries()) {
    const png = (await sections[pageNo - 1].screenshot()).toString('base64');
    const slidePath = path.join(buildDir, `${book.id}-slide${n + 1}.html`);
    await writeFile(slidePath, renderSlide(book, png, caption));
    const slide = await browser.newPage({ viewport: { width: 1080, height: 1350 } });
    await slide.goto(pathToFileURL(slidePath).href);
    await slide.evaluate(() => document.fonts.ready);
    await slide.screenshot({ path: path.join(previewDir, `${book.id}-${n + 1}.png`) });
    await slide.close();
  }

  await page.close();
  console.log(`built ${book.id}.pdf (${sections.length} pages, ${book.previews.length} slides)`);
}

await browser.close();
if (failed) process.exit(1);
