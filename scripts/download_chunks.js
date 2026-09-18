import https from 'https';
import fs from 'fs';

const chunks = [
  'f9e0c38.js',
  '6bc774a.js',
  '3b633f4.js',
  '47b5a21.js',
  '3933a52.js',
  '33e2bc9.js',
  '59c6b20.js',
  '069dc0e.js',
  'e0d9088.js',
  'bb9dade.js'
];

if (!fs.existsSync('./scripts/chunks')) fs.mkdirSync('./scripts/chunks', { recursive: true });

async function downloadChunk(file) {
  return new Promise((resolve) => {
    https.get(`https://speedy.io/_nuxt/${file}`, (res) => {
      let data = '';
      res.on('data', c => data += c);
      res.on('end', () => {
        fs.writeFileSync(`./scripts/chunks/${file}`, data);
        console.log(`Saved ${file} (${data.length} bytes)`);
        resolve();
      });
    });
  });
}

for (const f of chunks) {
  await downloadChunk(f);
}
