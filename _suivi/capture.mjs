// Captures de travail : node _suivi/capture.mjs /page largeur hauteur sortie.jpg [positions séparées par des virgules, en écrans]
import { chromium } from 'playwright';
import sharp from 'sharp';
import { demarrerServeur } from '../_audit/serveur.mjs';
const [chemin = '/', w = '1440', h = '900', sortie = '/home/claude/cap.jpg', pos = '0'] = process.argv.slice(2);
const srv = await demarrerServeur(process.cwd());
const b = await chromium.launch();
const ctx = await b.newContext({ viewport: { width: +w, height: +h }, deviceScaleFactor: 1, hasTouch: +w < 800, isMobile: +w < 800 });
const p = await ctx.newPage();
const erreurs = [];
p.on('console', (m) => { if (m.type() === 'error') erreurs.push(m.text()); });
p.on('pageerror', (e) => erreurs.push(String(e)));
await p.goto(`${srv.adresse}${chemin}`, { waitUntil: 'load' });
await p.waitForTimeout(3600);
const bufs = [];
for (const e of pos.split(',').map(Number)) {
  await p.evaluate((y) => window.scrollTo(0, y * innerHeight), e);
  await p.waitForTimeout(1600);
  bufs.push(await p.screenshot());
}
const W = +w, H = +h, cols = Math.min(bufs.length, 3), rows = Math.ceil(bufs.length / cols);
const ech = Math.min(1, 2400 / (cols * W));
const tiles = await Promise.all(bufs.map((x) => sharp(x).resize(Math.round(W * ech)).toBuffer()));
await sharp({ create: { width: Math.round(cols * W * ech), height: Math.round(rows * H * ech), channels: 3, background: '#888' } })
  .composite(tiles.map((t, i) => ({ input: t, left: Math.round((i % cols) * W * ech), top: Math.round(Math.floor(i / cols) * H * ech) }))).jpeg({ quality: 78 }).toFile(sortie);
if (erreurs.length) console.log('ERREURS :\n' + [...new Set(erreurs)].join('\n'));
await b.close(); await srv.fermer();
process.exit(0);
