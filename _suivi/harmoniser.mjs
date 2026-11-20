// Harmonisation légère et commune des photos de Carine : un peu plus chaud, un peu plus lumineux, saturation à peine relevée.
import sharp from 'sharp'; import fs from 'node:fs';
const plan = JSON.parse(fs.readFileSync('plan-images.json'));
for (const e of plan) {
  if (!e.source.startsWith('recu/harmo/')) continue;
  const src = e.source.replace('recu/harmo/', 'recu/site/');
  await sharp(src).modulate({ brightness: 1.03, saturation: 1.05 }).linear([1.035, 1.0, 0.955], [1, 0, -1]).jpeg({ quality: 92 }).toFile(e.source);
}
console.log('ok');
