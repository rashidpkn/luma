import sharp from 'sharp';

async function generatePerfectImages() {
  // Target logo height 50px
  const targetLogoHeight = 50;
  const logoLightBuf = await sharp('public/logos/logo.png')
    .resize({ height: targetLogoHeight })
    .toBuffer();

  const logoDarkBuf = await sharp('public/logos/logo-white.png')
    .resize({ height: targetLogoHeight })
    .toBuffer();

  // Mask rectangles covering entire logo area in navbar (navbar is from y=0 to y=148)
  const maskNavbarLight = Buffer.from(
    '<svg width="420" height="142"><rect width="420" height="142" fill="#ffffff"/></svg>'
  );
  const maskNavbarDark = Buffer.from(
    '<svg width="420" height="142"><rect width="420" height="142" fill="#000000"/></svg>'
  );

  // Mask rectangles for the ID area (y=255 to y=300)
  const maskIdLight = Buffer.from(
    '<svg width="300" height="45"><rect width="300" height="45" fill="#f1f2f6"/></svg>'
  );
  const maskIdDark = Buffer.from(
    '<svg width="300" height="45"><rect width="300" height="45" fill="#202020"/></svg>'
  );

  // SVG text for "Luma ID 7272219"
  const idSvgLight = Buffer.from(`
    <svg width="300" height="45" xmlns="http://www.w3.org/2000/svg">
      <text x="0" y="24" font-family="system-ui, -apple-system, sans-serif" font-size="21" font-weight="400" fill="#8e95a5">Luma ID 7272219</text>
    </svg>
  `);

  const idSvgDark = Buffer.from(`
    <svg width="300" height="45" xmlns="http://www.w3.org/2000/svg">
      <text x="0" y="24" font-family="system-ui, -apple-system, sans-serif" font-size="21" font-weight="400" fill="#9da3af">Luma ID 7272219</text>
    </svg>
  `);

  // Composite Light Dashboard
  await sharp('public/imgs/dashboard-light.jpg')
    .composite([
      { input: maskNavbarLight, left: 240, top: 4 },
      { input: logoLightBuf, left: 264, top: 50 },
      { input: maskIdLight, left: 260, top: 258 },
      { input: idSvgLight, left: 265, top: 262 },
    ])
    .jpeg({ quality: 98 })
    .toFile('public/imgs/luma-dashboard-light.jpg');

  // Composite Dark Dashboard
  await sharp('public/imgs/dashboard-dark.jpg')
    .composite([
      { input: maskNavbarDark, left: 240, top: 4 },
      { input: logoDarkBuf, left: 264, top: 50 },
      { input: maskIdDark, left: 260, top: 258 },
      { input: idSvgDark, left: 265, top: 262 },
    ])
    .jpeg({ quality: 98 })
    .toFile('public/imgs/luma-dashboard-dark.jpg');

  // Extract preview crops to verify
  await sharp('public/imgs/luma-dashboard-light.jpg')
    .extract({ left: 220, top: 20, width: 620, height: 340 })
    .toFile('public/imgs/verify-crop-light.jpg');

  await sharp('public/imgs/luma-dashboard-dark.jpg')
    .extract({ left: 220, top: 20, width: 620, height: 340 })
    .toFile('public/imgs/verify-crop-dark.jpg');

  console.log('Successfully generated luma-dashboard-light.jpg and luma-dashboard-dark.jpg!');
}

generatePerfectImages().catch(console.error);
