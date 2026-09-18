import fs from 'fs';

const list = JSON.parse(fs.readFileSync("./scripts/assets_list.json", "utf-8"));
const nonWise = list.filter(u => !u.includes("wise.com"));
console.log("Non-wise assets:", nonWise);
