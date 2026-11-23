import { chromium } from 'playwright';
import { demarrerServeur } from '../_audit/serveur.mjs';
const srv = await demarrerServeur(process.cwd());
const b = await chromium.launch(); const p = await b.newPage({ viewport: { width: 1440, height: 900 } });
await p.goto(srv.adresse + '/sur-mesure#composer'); await p.waitForTimeout(3600);
await p.screenshot({ path: '/home/claude/comp-a.png' });
const info = await p.evaluate(() => [...document.querySelectorAll('.choix')].map((f) => Math.round(f.getBoundingClientRect().top) + '/' + Math.round(f.getBoundingClientRect().height)));
console.log(info, await p.evaluate(() => scrollY));
await b.close(); await srv.fermer(); process.exit(0);
