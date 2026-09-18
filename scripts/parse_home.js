import fs from 'fs';
import * as cheerio from 'cheerio';

const html = fs.readFileSync("./scripts/section_3_js-locomotive.html", "utf-8");
const $ = cheerio.load(html);

const homePage = $('.home-page');
console.log("Direct children of .home-page:");

homePage.children().each((i, el) => {
  const $el = $(el);
  const tag = el.tagName;
  const cls = $el.attr('class') || '';
  const id = $el.attr('id') || '';
  const headings = $el.find('h1, h2, h3').map((_, h) => $(h).text().replace(/\s+/g, ' ').trim()).get();
  console.log(`Child [${i}] <${tag}> class="${cls}" id="${id}" | headings: ${JSON.stringify(headings)}`);
  
  // Also save each main sub-block
  const safeName = (cls.split(' ')[0] || tag || `child_${i}`).replace(/[^a-zA-Z0-9_-]/g, '_');
  fs.writeFileSync(`./scripts/home_child_${i}_${safeName}.html`, $.html(el));
});
