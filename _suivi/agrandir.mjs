import sharp from 'sharp'; import fs from 'node:fs';
for (const f of fs.readdirSync('recu/grok-originaux').filter((f) => f.endsWith('.jpg'))) {
  const m = await sharp(`recu/grok-originaux/${f}`).metadata();
  const paysage = m.width >= m.height;
  await sharp(`recu/grok-originaux/${f}`).resize(paysage ? { width: 1600, kernel: 'lanczos3' } : { width: 1320, kernel: 'lanczos3' }).sharpen({ sigma: 0.6 }).jpeg({ quality: 93 }).toFile(`recu/grok/${f}`);
}
console.log('ok');
