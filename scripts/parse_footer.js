import fs from 'fs';
import * as cheerio from 'cheerio';

const html = fs.readFileSync("./scripts/home_child_5_footer.html", "utf-8");
const $ = cheerio.load(html);

console.log("Footer text preview:");
console.log($('footer').text().replace(/\s+/g, ' ').trim().slice(0, 500));
