/* Page 404 : « Cette boîte est vide ». */
import { html } from '../../outils/gabarit.mjs';

export const page = { cle: '404', fichier: '404', langues: ['fr'], partage: false };

export default (c) => html`
<section class="ouv-plein ouv-404" id="debut" data-ouverture-page>
  ${c.media({ nom: 'grok/404', alt: c.donnees.images['grok/404'].alt, priorite: true, classe: 'ouv-plein-media', sizes: '100vw', cadrage: '50% 70%', attrs: 'data-fx="parallaxe" data-fx-force="6"' })}
  <div class="conteneur ouv-plein-texte">
    <h1 class="titre-xl" data-anime="gsap"><span class="ligne-masque"><span class="hero-ligne">${c.tb('introuvable.titre')}</span></span></h1>
    <p class="chapeau" data-anime="gsap" data-info-cle>${c.t('introuvable.texte')}</p>
    <p class="hero-actions" data-anime="gsap">${c.lien('accueil', { classe: 'bouton', texte: c.t('introuvable.retour'), attrs: 'data-action-principale data-iris-centre' })} ${c.lien('creations', { classe: 'lien-fleche', texte: c.t('introuvable.creations') })}</p>
  </div>
</section>
`;
