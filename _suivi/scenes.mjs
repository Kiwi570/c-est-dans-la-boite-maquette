import sharp from 'sharp';
const C = { 'scene-mariage': ['just-married-again', 10, 87, 12, 79], 'scene-animal': ['amour-virgul-1', 12, 86, 22, 73],
  'scene-vacances': ['laponie-finlandaise-1', 15, 87, 25, 70], 'scene-famille': ['papa-moi', 13, 87, 23, 72], 'scene-amis': ['love-cats', 27, 73, 6, 75] };
for (const [nom, [f, x0, x1, y0, y1]] of Object.entries(C)) {
  const s = sharp(`recu/harmo/${f}.jpg`); const m = await s.metadata();
  const left = Math.round(m.width * x0 / 100), top = Math.round(m.height * y0 / 100);
  await sharp(`recu/harmo/${f}.jpg`).extract({ left, top, width: Math.round(m.width * (x1 - x0) / 100), height: Math.round(m.height * (y1 - y0) / 100) })
    .resize(900, 960, { fit: 'cover', position: 'attention' }).jpeg({ quality: 90 }).toFile(`recu/scenes/${nom}.jpg`);
}
console.log('ok');
