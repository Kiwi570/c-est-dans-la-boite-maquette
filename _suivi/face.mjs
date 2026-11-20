import sharp from 'sharp';
const f = 'recu/harmo/kangourou-centre-rouge-edited.jpg'; const m = await sharp(f).metadata();
await sharp(f).extract({ left: Math.round(m.width * .045), top: Math.round(m.height * .185), width: Math.round(m.width * .86), height: Math.round(m.height * .695) })
  .resize(640, 840, { fit: 'fill' }).jpeg({ quality: 92 }).toFile('recu/scenes/boite-face.jpg');
console.log('ok');
