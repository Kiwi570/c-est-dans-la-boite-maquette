// node _suivi/planche-ecrans.mjs sortie.jpg colonnes largeur fichiers...
import sharp from 'sharp';
const [out, cols, w, ...files] = process.argv.slice(2);
const C = +cols, W = +w;
const metas = await Promise.all(files.map((f) => sharp(f).metadata()));
const H = Math.round(W * metas[0].height / metas[0].width);
const tiles = await Promise.all(files.map((f) => sharp(f).resize(W, H, { fit: 'cover', position: 'top' }).toBuffer()));
const rows = Math.ceil(files.length / C);
await sharp({ create: { width: C * W + (C + 1) * 8, height: rows * H + (rows + 1) * 8, channels: 3, background: '#777' } })
  .composite(tiles.map((t, i) => ({ input: t, left: 8 + (i % C) * (W + 8), top: 8 + Math.floor(i / C) * (H + 8) }))).jpeg({ quality: 80 }).toFile(out);
