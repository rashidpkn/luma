import fs from 'fs';

const filePath = './public/lotties/Features/data.json';
if (fs.existsSync(filePath)) {
  const json = JSON.parse(fs.readFileSync(filePath, 'utf-8'));
  if (json.assets) {
    json.assets.forEach(a => {
      if (a.p && a.u === 'images/') {
        a.u = 'https://speedy.io/lotties/Features/images/';
      }
    });
  }
  fs.writeFileSync(filePath, JSON.stringify(json));
  console.log("Updated lottie assets path to https://speedy.io/lotties/Features/images/");
}
