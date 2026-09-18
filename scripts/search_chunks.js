import fs from 'fs';

const files = fs.readdirSync('./scripts/chunks');
files.forEach(f => {
  const content = fs.readFileSync(`./scripts/chunks/${f}`, 'utf-8');
  if (content.includes('animation-container') || content.includes('block-save-time')) {
    console.log(`Found animation/save-time in: ${f}`);
    // extract some surrounding context
    const idx = content.indexOf('block-save-time');
    if (idx !== -1) {
      console.log(`Context in ${f}:`, content.substring(Math.max(0, idx - 150), Math.min(content.length, idx + 400)));
    }
  }
  if (content.includes('cardsAnimation') || content.includes('block1')) {
    console.log(`Found cardsAnimation/block1 in: ${f}`);
  }
});
