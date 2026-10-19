// HTML helpers shared by the workbook content files.

export function stepHeader(badge, title, lead = '') {
  return `<header class="step"><span class="badge">${badge}</span><h2>${title}</h2></header>` +
    (lead ? `<p class="lead">${lead}</p>` : '');
}

// cols: [{ label, w }]. rows: number of blank rows, or an array of (partial) row arrays.
// index: { from } fills the first column with running numbers.
export function table({ cols, rows = 0, index, example, total, rowHeight, cls = '' }) {
  const colgroup = cols.map((c) => `<col${c.w ? ` style="width:${c.w}"` : ''}>`).join('');
  const head = cols.map((c) => `<th>${c.label}</th>`).join('');
  const body = [];
  if (example) body.push(`<tr class="example">${example.map((v) => `<td>${v}</td>`).join('')}</tr>`);
  const literal = Array.isArray(rows) ? rows : null;
  const count = literal ? literal.length : rows;
  for (let i = 0; i < count; i++) {
    const cells = literal ? literal[i] : [];
    const tds = cols.map((_, j) => {
      let v = cells[j] ?? '';
      if (j === 0 && index && v === '') v = index.from + i;
      return `<td>${v}</td>`;
    }).join('');
    body.push(`<tr>${tds}</tr>`);
  }
  if (total) body.push(`<tr class="total"><td>${total}</td>${'<td></td>'.repeat(cols.length - 1)}</tr>`);
  const style = rowHeight ? ` style="--row:${rowHeight}"` : '';
  return `<table class="grid ${cls}"${style}><colgroup>${colgroup}</colgroup>` +
    `<thead><tr>${head}</tr></thead><tbody>${body.join('')}</tbody></table>`;
}

export function lines(n, gap) {
  return `<div class="lines"${gap ? ` style="--gap:${gap}"` : ''}>${'<i></i>'.repeat(n)}</div>`;
}

export function checklist(items) {
  return `<ul class="check">${items.map((i) => `<li><span>${i}</span></li>`).join('')}</ul>`;
}

export function box(title, body, variant = '') {
  return `<section class="box ${variant}">${title ? `<h3>${title}</h3>` : ''}${body}</section>`;
}

export function blank(width = '32mm') {
  return `<span class="blank" style="width:${width}"></span>`;
}

// Gray "circle one" options inside a table cell.
export function opts(text) {
  return `<span class="opt">${text}</span>`;
}

export function fieldRow(items) {
  return `<div class="fields">${items.map(([label, unit, w]) =>
    `<span class="field"><span class="label">${label}</span>${blank(w)}<span class="unit">${unit ?? ''}</span></span>`).join('')}</div>`;
}

// One week card for the weekly review pages.
export function weekCard(title, body) {
  return `<section class="box week"><h3>${title}</h3>${body}</section>`;
}
