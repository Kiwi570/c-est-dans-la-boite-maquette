import { chromium } from 'playwright';
import { demarrerServeur } from '../_audit/serveur.mjs';
const [chemin, script] = process.argv.slice(2);
const srv = await demarrerServeur(process.cwd());
const b = await chromium.launch(); const p = await b.newPage({ viewport: { width: 1440, height: 900 } });
p.on('pageerror', (e) => console.log('ERR', String(e)));
p.on('console', (m) => { if (m.type() === 'error') console.log('CONSOLE', m.text()); });
await p.goto(srv.adresse + chemin); await p.waitForTimeout(3600); if (process.argv[4]) { await p.evaluate(process.argv[4]); await p.waitForTimeout(1200); }
console.log(JSON.stringify(await p.evaluate(script), null, 1));
await b.close(); await srv.fermer(); process.exit(0);
