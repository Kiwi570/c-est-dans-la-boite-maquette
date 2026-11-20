import sharp from 'sharp';
const files = process.argv.slice(3), out = process.argv[2];
const W = 400;
const tiles = [];
for (const f of files) {
  const m = await sharp(f).metadata(); const H = Math.round(W * m.height / m.width);
  let svg = `<svg width="${W}" height="${H}" xmlns="http://www.w3.org/2000/svg">`;
  for (let p = 0; p <= 100; p += 5) { const x = W * p / 100, y = H * p / 100, c = p % 10 ? 'rgba(255,0,0,.35)' : 'rgba(255,0,0,.8)';
    svg += `<line x1="${x}" y1="0" x2="${x}" y2="${H}" stroke="${c}" stroke-width="1"/><line x1="0" y1="${y}" x2="${W}" y2="${y}" stroke="${c}" stroke-width="1"/>`;
    if (p % 10 === 0) svg += `<text x="${x + 2}" y="12" font-size="10" fill="yellow">${p}</text><text x="2" y="${y - 2}" font-size="10" fill="yellow">${p}</text>`; }
  svg += '</svg>';
  tiles.push({ buf: await sharp(f).resize(W).composite([{ input: Buffer.from(svg) }]).png().toBuffer(), H });
}
const Hm = Math.max(...tiles.map(t => t.H));
await sharp({ create: { width: W * tiles.length, height: Hm, channels: 3, background: '#fff' } }).composite(tiles.map((t, i) => ({ input: t.buf, left: i * W, top: 0 }))).jpeg().toFile(out);
