import { chromium } from 'playwright';
import { demarrerServeur } from '../_audit/serveur.mjs';
const [chemin, sel, avant, sortie] = process.argv.slice(2);
const srv = await demarrerServeur(process.cwd());
const b = await chromium.launch(); const p = await b.newPage({ viewport: { width: 1440, height: 900 }, deviceScaleFactor: 2 });
await p.goto(srv.adresse + chemin); await p.waitForTimeout(3600);
if (avant) { await p.evaluate(avant); await p.waitForTimeout(1500); }
await p.locator(sel).first().screenshot({ path: sortie });
await b.close(); await srv.fermer(); process.exit(0);
