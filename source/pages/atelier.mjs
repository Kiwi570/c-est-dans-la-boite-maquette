/* L'atelier : ouverture plein cadre (les mains qui découpent), Carine et le Polaroïd, les quatre gestes de fabrication,
   les matières, l'envoi, l'appel final. */
import { html } from '../../outils/gabarit.mjs';
import { dev } from './accueil.mjs';

export const page = { cle: 'atelier', fichier: 'atelier', imagePartage: 'grok/atelier-ouverture-1280.webp' };

const matieres = [['sable', 'naturel'], ['coquillages', 'naturel'], ['gazon', 'pasNaturel'], ['fourrure', 'pasNaturel']];

export default (c) => {
  const img = (nom) => c.donnees.images[nom] || {};
  return html`
<section class="ouv-plein ouv-atelier sombre" id="debut" data-ouverture-page>
  ${c.media({ nom: 'grok/atelier-ouverture', alt: img('grok/atelier-ouverture').alt, priorite: true, classe: 'ouv-plein-media', sizes: '100vw', cadrage: '70% 50%', attrs: 'data-fx="zoom" data-fx-force="10" data-iris-centre' })}
  <div class="conteneur ouv-plein-texte">
    <p class="surtitre" data-anime="gsap">${c.t('atelier.tete.surtitre')}</p>
    <h1 class="titre-xl" data-anime="gsap"><span class="ligne-masque"><span class="hero-ligne">${c.tb('atelier.tete.titre')}</span></span></h1>
    <p class="chapeau" data-anime="gsap">${c.t('atelier.tete.texte')}</p>
    <div class="hero-actions" data-anime="gsap">
      ${c.lien('sur-mesure', { ancre: 'composer', classe: 'bouton', texte: c.t('atelier.tete.action'), attrs: 'data-action-principale data-survol="magnetique"' })}
      <span class="hero-info" data-info-cle>${c.t('atelier.tete.info')}</span>
    </div>
  </div>
</section>

<section class="carine-histoire" id="carine">
  <div class="conteneur histoire-grille">
    <div class="histoire-visuel">
      ${dev(c, { nom: 'cadre-logo', alt: c.s('accueil.fin.logoAlt'), classe: 'histoire-logo', sizes: '(max-width: 760px) 60vw, 26vw', attrs: 'data-fx="vitesse"' })}
    </div>
    <div>
      <p class="surtitre">${c.t('atelier.carine.surtitre')}</p>
      <h2 class="titre-l" data-anime="lignes">${c.tb('atelier.carine.titre')}</h2>
      <p data-anime>${c.t('atelier.carine.texte1')}</p>
      <p data-anime>${c.t('atelier.carine.texte2')}</p>
      <blockquote class="citation" data-anime="mots"><p>${c.t('atelier.carine.citation')}</p></blockquote>
      <p class="texte-doux" data-anime>${c.t('atelier.carine.inspirations')}</p>
    </div>
  </div>
</section>

<section class="gestes kraft" id="fabrication">
  <div class="conteneur">
    <div class="tete-section">
      <p class="surtitre">${c.t('atelier.etapes.surtitre')}</p>
      <h2 class="titre-l" data-anime="lignes">${c.tb('atelier.etapes.titre')}</h2>
    </div>
    <ol class="gestes-liste">
      ${['boitier', 'verre', 'plans', 'matieres'].map((n, i) => html`<li class="geste" id="geste-${n}">
        ${c.media({ nom: 'grok/etape-' + n, alt: img('grok/etape-' + n).alt, classe: 'geste-media', sizes: '(max-width: 760px) 100vw, 46vw', ratio: '16 / 10', attrs: 'data-fx="zoom" data-fx-force="12"' })}
        <div class="geste-texte">
          <span class="geste-num" aria-hidden="true">${String(i + 1).padStart(2, '0')}</span>
          <h3 class="titre-m">${c.t('atelier.etapes.e' + (i + 1))}</h3>
          <p>${c.t('atelier.etapes.e' + (i + 1) + 't')}</p>
        </div>
      </li>`)}
    </ol>
  </div>
</section>

<section class="matieres" id="matieres">
  <div class="conteneur">
    <div class="tete-section">
      <p class="surtitre">${c.t('atelier.matieres.surtitre')}</p>
      <h2 class="titre-l" data-anime="lignes">${c.tb('atelier.matieres.titre')}</h2>
      <p class="chapeau" data-anime>${c.t('atelier.matieres.texte')}</p>
    </div>
    <ul class="matieres-liste" data-anime="cascade">
      ${matieres.map(([m, nature]) => html`<li class="matiere">
        ${dev(c, { nom: 'grok/matiere-' + m, alt: img('grok/matiere-' + m).alt, classe: 'matiere-media', sizes: '(max-width: 760px) 46vw, 23vw', ratio: '1 / 1' })}
        <p class="matiere-nom">${c.t('atelier.matieres.' + m)}</p>
        <p class="matiere-nature">${c.t('atelier.matieres.' + nature)}</p>
      </li>`)}
    </ul>
  </div>
</section>

<section class="envoi" id="envoi">
  <div class="conteneur envoi-grille">
    <div>
      <p class="surtitre">${c.t('atelier.emballage.surtitre')}</p>
      <h2 class="titre-l" data-anime="lignes">${c.tb('atelier.emballage.titre')}</h2>
      <p class="chapeau" data-anime>${c.t('atelier.emballage.texte')}</p>
    </div>
    <div class="envoi-visuels">
      ${c.media({ nom: 'boite-dos', alt: img('boite-dos').alt, classe: 'envoi-dos', sizes: '(max-width: 760px) 46vw, 22vw', ratio: '4 / 5', attrs: 'data-effet="balancier"', legende: c.t('atelier.emballage.legendeDos') })}
      ${c.media({ nom: 'emballage-biais', alt: img('emballage-biais').alt, classe: 'envoi-carton', sizes: '(max-width: 760px) 46vw, 22vw', ratio: '3 / 4', attrs: 'data-fx="parallaxe" data-fx-force="8"', legende: c.t('atelier.emballage.legendeCarton') })}
    </div>
  </div>
</section>

<section class="fin sombre" id="fin">
  <div class="conteneur fin-grille">
    ${dev(c, { nom: 'boite-girafes', alt: img('boite-girafes').alt, classe: 'fin-photo', sizes: '(max-width: 760px) 50vw, 22vw', ratio: '2 / 3', attrs: 'data-fx="vitesse"' })}
    <div>
      <h2 class="titre-xl" data-anime="lignes">${c.tb('atelier.fin.titre')}</h2>
      <p class="chapeau" data-anime>${c.t('atelier.fin.texte')}</p>
      <p class="fin-actions" data-anime>
        ${c.lien('sur-mesure', { ancre: 'composer', classe: 'bouton', texte: c.t('atelier.fin.action'), attrs: 'data-survol="magnetique"' })}
        ${c.lien('creations', { classe: 'bouton bouton--contour', texte: c.libelle('creations') })}
      </p>
    </div>
  </div>
</section>
`;
};
