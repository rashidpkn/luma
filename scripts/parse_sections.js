import fs from 'fs';
import * as cheerio from 'cheerio';

const html = fs.readFileSync("/Users/rashid/.gemini/antigravity-ide/brain/b23a7073-d1dd-4d7e-9773-afc9d6fe5c93/scratch/speedy_clean.html", "utf-8");
const $ = cheerio.load(html);

const page = $('.page');
console.log("Children of .page:");
const sections = [];

page.children().each((i, el) => {
  const $el = $(el);
  const tag = el.tagName;
  const cls = $el.attr('class') || '';
  const id = $el.attr('id') || '';
  const headings = $el.find('h1, h2, h3').map((_, h) => $(h).text().replace(/\s+/g, ' ').trim()).get();
  console.log(`[${i}] <${tag}> class="${cls}" id="${id}" | headings: ${JSON.stringify(headings)}`);
  sections.push({
    index: i,
    tag,
    cls,
    id,
    headings,
    htmlSnippet: $.html(el).slice(0, 300)
  });
});

fs.writeFileSync("./scripts/sections.json", JSON.stringify(sections, null, 2));

// Also let's extract each direct child's full HTML
sections.forEach((s, idx) => {
  const safeName = (s.cls.split(' ')[0] || s.tag || `section_${idx}`).replace(/[^a-zA-Z0-9_-]/g, '_');
  const childEl = page.children().eq(idx);
  fs.writeFileSync(`./scripts/section_${idx}_${safeName}.html`, $.html(childEl));
});
console.log("Extracted all sections into ./scripts/");
