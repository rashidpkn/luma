import fs from 'fs';

const css = fs.readFileSync("/Users/rashid/.gemini/antigravity-ide/brain/b23a7073-d1dd-4d7e-9773-afc9d6fe5c93/scratch/speedy_styles.css", "utf-8");

// Search for classes related to animation, cards, anchor, header
const keywords = ['animation-container', 'anchor-blocks', 'block-save-time', 'card-wrapper', 'block-get-paid', 'block-countries-global', 'block-dashboard', 'block-sustainability', 'block-benefits', 'slider-names', 'navbar', 'menu'];

keywords.forEach(kw => {
  const matches = [...css.matchAll(new RegExp(`[^}]*\\.${kw}[^{]*\\{[^}]*\\}`, 'g'))].map(m => m[0]);
  console.log(`\n=== Keyword: ${kw} (${matches.length} rules) ===`);
  matches.slice(0, 5).forEach(m => console.log(m.slice(0, 150)));
});
