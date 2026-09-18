import fs from 'fs';
import * as cheerio from 'cheerio';

const html = fs.readFileSync("./scripts/home_child_4_main.html", "utf-8");
const $ = cheerio.load(html);

console.log("Direct children of <main>:");
$('main').children().each((i, el) => {
  const $el = $(el);
  const tag = el.tagName;
  const cls = $el.attr('class') || '';
  const id = $el.attr('id') || '';
  const headings = $el.find('h1, h2, h3').map((_, h) => $(h).text().replace(/\s+/g, ' ').trim()).get();
  console.log(`[${i}] <${tag}> class="${cls}" id="${id}" | headings: ${JSON.stringify(headings)}`);

  const safeName = (cls.split(' ')[0] || tag || `main_child_${i}`).replace(/[^a-zA-Z0-9_-]/g, '_');
  fs.writeFileSync(`./scripts/main_child_${i}_${safeName}.html`, $.html(el));
});
