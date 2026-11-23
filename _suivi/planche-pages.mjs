import sharp from 'sharp';
const noms = ['accueil', 'creations', 'atelier', 'sur-mesure', 'contact', '404'];
const W = 720, H = 450;
const tuiles = await Promise.all(noms.map((n) => sharp(`/home/claude/f-${n}.jpg`).resize(W, H).toBuffer()));
await sharp({ create: { width: W * 3 + 40, height: H * 2 + 30, channels: 3, background: '#E9E6E1' } })
  .composite(tuiles.map((t, i) => ({ input: t, left: 10 + (i % 3) * (W + 10), top: 10 + Math.floor(i / 3) * (H + 10) }))).jpeg({ quality: 82 }).toFile('_suivi/pages-v1.jpg');
console.log('ok');
