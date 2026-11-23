/* Créations : le mur de boîtes accrochées, la galerie filtrable avec visionneuse (?boite=…, ?filtre=…),
   la boîte à sa vraie taille, l'appel final. */
import { html, brut } from '../../outils/gabarit.mjs';
import { dev } from './accueil.mjs';

export const page = { cle: 'creations', fichier: 'creations', imagePartage: 'boite-lautrec-1300.webp' };

const mur = [['scene-vacances', 'Laponie Finlandaise'], ['scene-animal', 'Un amour de Virgul'], ['scene-mariage', 'Just married… again !'], ['scene-famille', 'Mon Papa et Moi'], ['scene-amis', 'The love cats']];
const filtres = ['tout', 'sur-mesure', 'animaux', 'voyages', 'art'];

export default (c) => {
  const img = (nom) => c.donnees.images[nom] || {};
  const liste = c.donnees.creations;
  return html`
<section class="ouv ouv-mur" id="debut" data-ouverture-page>
  <div class="conteneur ouv-mur-texte">
    <p class="surtitre" data-anime="gsap">${c.t('creations.tete.surtitre')}</p>
    <h1 class="titre-xl" data-anime="gsap"><span class="ligne-masque"><span class="hero-ligne">${c.tb('creations.tete.titre')}</span></span></h1>
    <p class="chapeau" data-anime="gsap">${c.t('creations.tete.texte')}</p>
    <div class="hero-actions" data-anime="gsap">
      ${c.lien('sur-mesure', { ancre: 'composer', classe: 'bouton', texte: c.t('creations.tete.action'), attrs: 'data-action-principale data-survol="magnetique"' })}
      <span class="hero-info" data-info-cle>${c.t('creations.tete.info')}</span>
    </div>
  </div>
  <div class="mur" aria-hidden="true" data-visuel>
    <span class="mur-fil" data-grille="fil"></span>
    ${mur.map(([nom, legende], i) => html`<div class="mur-boite mur-boite--${i + 1}" data-effet="balancier"${i === 2 ? brut(' data-iris-centre') : ''}>
      ${c.media({ nom, alt: '', classe: 'mur-media', sizes: '(max-width: 760px) 30vw, 15vw', ratio: '15 / 16', priorite: i === 2 })}
      <span class="mur-legende main">${legende}</span>
    </div>`)}
  </div>
</section>

<section class="galerie-creations" id="galerie">
  <div class="conteneur">
    <div class="galerie-tete">
      <div>
        <h2 class="titre-l" data-anime="lignes">${c.t('creations.galerie.titre')}</h2>
        <p class="chapeau"><span class="aide-tactile">${c.t('creations.galerie.texte')}</span><span class="aide-souris">${c.t('creations.galerie.textePointeur')}</span></p>
        <p class="galerie-compte" data-compte data-modele="${c.s('creations.galerie.nombre')}">${c.t('creations.galerie.nombre', { n: liste.length })}</p>
      </div>
      <div class="filtres" role="group" aria-label="${c.s('creations.galerie.filtres')}">
        ${filtres.map((f) => html`<button type="button" class="filtre" data-filtre="${f}" aria-pressed="${f === 'tout' ? 'true' : 'false'}">${c.t('creations.galerie.' + f)}</button>`)}
      </div>
    </div>
    <ul class="creations-grille" data-anime="cascade">
      ${liste.map((cr) => html`<li class="creation" id="boite-${cr.id}" data-id="${cr.id}" data-categorie="${cr.categorie}" data-legende="${cr.legende}" data-libelle-categorie="${c.s('creations.galerie.' + cr.categorie)}">
        <button type="button" class="creation-bouton" aria-label="${c.s('creations.galerie.ouvrir', { legende: cr.legende })}">
          ${dev(c, { nom: cr.image, alt: img(cr.image).alt, classe: 'creation-media', sizes: '(max-width: 760px) 46vw, (max-width: 1080px) 31vw, 23vw', ratio: cr.image === 'boite-mariage' ? '9 / 10' : '2 / 3' })}
          <span class="creation-legende main">${cr.legende}</span>
          <span class="creation-cat">${c.t('creations.galerie.' + cr.categorie)}</span>
        </button>
      </li>`)}
      <li class="creation-appel">
        ${c.lien('sur-mesure', { ancre: 'composer', classe: 'creation-appel-lien', texte: html`<span class="idee-cadre" aria-hidden="true"><span class="idee-fenetre"><span class="main">?</span></span><span class="idee-bord main">${c.t('creations.galerie.appelCadre')}</span></span><span class="creation-legende main">${c.t('creations.galerie.appelTitre')}</span><span class="creation-cat">${c.t('creations.galerie.appelLien')} →</span>` })}
      </li>
    </ul>
  </div>
</section>

<div class="visionneuse" role="dialog" aria-modal="true" aria-label="${c.s('creations.galerie.titre')}" data-recouvrement hidden>
  <div class="visionneuse-cadre">
    <img class="visionneuse-img" src="/assets/images/boite-virgul-800.webp" alt="" width="800" height="1200">
    <div class="visionneuse-bas">
      <p class="visionneuse-legende main"></p>
      <p class="visionneuse-cat"></p>
    </div>
    <button type="button" class="visionneuse-bouton visionneuse-prec" data-prec aria-label="${c.s('commun.precedente')}">←</button>
    <button type="button" class="visionneuse-bouton visionneuse-suiv" data-suiv aria-label="${c.s('commun.suivante')}">→</button>
    <button type="button" class="visionneuse-fermer" data-fermer>${c.t('commun.fermerVisionneuse')} ✕</button>
  </div>
</div>

<section class="echelle kraft" id="vraie-taille">
  <div class="conteneur echelle-grille">
    <div>
      <p class="surtitre">${c.t('creations.echelle.surtitre')}</p>
      <h2 class="titre-l" data-anime="lignes">${c.tb('creations.echelle.titre')}</h2>
      <p data-anime>${c.t('creations.echelle.texte')}</p>
      <div class="echelle-choix" role="group" aria-label="${c.s('creations.echelle.choix')}">
        <button type="button" class="filtre" data-pose="mur" aria-pressed="true">${c.t('creations.echelle.mur')}</button>
        <button type="button" class="filtre" data-pose="pose" aria-pressed="false">${c.t('creations.echelle.pose')}</button>
      </div>
      <p class="echelle-cartel" data-cartel aria-live="polite" data-texte-mur="${c.s('creations.echelle.cartel', { pose: c.s('creations.echelle.poseMur') })}" data-texte-pose="${c.s('creations.echelle.cartel', { pose: c.s('creations.echelle.posePose') })}">${c.t('creations.echelle.cartel', { pose: c.s('creations.echelle.poseMur') })}</p>
      <p class="echelle-note">${c.t('creations.echelle.note')}</p>
    </div>
    <div class="echelle-scene" data-etat="mur" role="img" aria-label="${c.s('creations.echelle.aria')}" data-visuel>
      <span class="echelle-clou" aria-hidden="true"></span>
      <span class="echelle-interrupteur" aria-hidden="true"><span>8&nbsp;cm</span></span>
      <span class="echelle-repere echelle-repere--tasse" aria-hidden="true">9,5&nbsp;cm</span>
      <span class="echelle-etagere" aria-hidden="true"></span>
      <svg class="echelle-tasse" viewBox="0 0 100 95" aria-hidden="true" focusable="false"><path d="M8 4 H76 V78 Q76 92 62 92 H22 Q8 92 8 78 Z" fill="#C8322B"/><path d="M76 20 Q96 20 96 40 Q96 60 76 60" fill="none" stroke="#C8322B" stroke-width="8"/><path d="M8 4 H76 V14 H8 Z" fill="#A82A24"/></svg>
      <svg class="echelle-plante" viewBox="0 0 100 220" aria-hidden="true" focusable="false"><path d="M50 130 C40 90 10 80 6 40 C30 60 44 80 50 130 Z" fill="#5E8A5C"/><path d="M50 130 C58 80 86 60 94 20 C70 50 58 80 50 130 Z" fill="#4F7F52"/><path d="M50 130 C46 100 40 60 52 4 C62 60 56 100 50 130 Z" fill="#6E9A6A"/><path d="M14 130 H86 L78 218 H22 Z" fill="#B9774E"/><rect x="10" y="126" width="80" height="14" rx="3" fill="#A5653F"/></svg>
      <div class="echelle-boite" data-effet="balancier">
        ${c.media({ nom: 'boite-face', alt: '', classe: 'echelle-media', sizes: '200px', ratio: '16 / 21' })}
        <span class="echelle-cote echelle-cote--h" aria-hidden="true">21&nbsp;cm</span>
        <span class="echelle-cote echelle-cote--l" aria-hidden="true">16&nbsp;cm</span>
      </div>
    </div>
  </div>
</section>

<section class="fin sombre" id="fin">
  <div class="conteneur fin-grille">
    ${dev(c, { nom: 'boite-papa', alt: img('boite-papa').alt, classe: 'fin-photo', sizes: '(max-width: 760px) 50vw, 22vw', ratio: '2 / 3', attrs: 'data-fx="vitesse"' })}
    <div>
      <h2 class="titre-xl" data-anime="lignes">${c.tb('creations.fin.titre')}</h2>
      <p class="chapeau" data-anime>${c.t('creations.fin.texte')}</p>
      <p class="fin-actions" data-anime>
        ${c.lien('sur-mesure', { ancre: 'composer', classe: 'bouton', texte: c.t('creations.fin.action'), attrs: 'data-survol="magnetique"' })}
        ${c.lien('contact', { classe: 'bouton bouton--contour', texte: c.t('commun.ecrire') })}
      </p>
    </div>
  </div>
</section>
`;
};
