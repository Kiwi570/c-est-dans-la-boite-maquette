# Rapport d’audit

Projet : `c-est-dans-la-boite-maquette` · 20/11/2026 21:16:42 · 15 min · 6 page(s) · audit standard

## Résumé

- Statut : **33 échec(s)**
- Passe : `20261120-200113-standard` · version ?v=1
- Échecs : **33**
- À regarder : **30**
- Non lancé : **1**
- Contrôles passés : vercel.json (1), .vercelignore (1), robots.txt (1), numéro de version (1), langues (1), grille wouahou (3), mesures (66), balayage (5), films d’ouverture (8), films de transition (8), bords de l’écran (5), intro accélérable et passable (7), menu (1), clavier (6), liens et boutons (6), liens profonds (10), liens vers la page en cours (5), changements de hauteur (4), fluidité (8), défilement selon l’appareil (5), mouvement (8), effets du plan (6), souris immobile (5), vitesse (5), captures (1)

## Grille wouahou

| Point | État | Détail |
|---|---|---|
| 1. L’effet signature se manipule | ✗ absent | aucun data-grille="manipuler" sur l’accueil |
| 2. L’intro devient la page | ✓ présent | objet d’ouverture sur 5 page(s), versObjet dans l’intro |
| 3. La transition reprend le motif | ✓ présent | voile en iris |
| 4. Quelque chose relie les sections et les pages | ✗ absent | sur aucune page |
| 5. Un titre fait l’événement sur chaque page | ✗ absent | sur aucune page |
| 6. La scène est un geste du métier | · sans objet | aucune scène épinglée marquée ni galerie générique |
| 7. L’action principale a un retour physique | ✗ absent | sur aucune page |

Le script vérifie les marques (`data-grille`, `data-iris-centre`, forme du voile, `versObjet`) ; la force et la justesse de chaque point se jugent sur les captures et les films.

## Échecs

### image de partage (5)

- **image de partage** — `atelier.html` — fichier introuvable : /assets/partage/atelier-fr.jpg
- **image de partage** — `contact.html` — fichier introuvable : /assets/partage/contact-fr.jpg
- **image de partage** — `creations.html` — fichier introuvable : /assets/partage/creations-fr.jpg
- **image de partage** — `index.html` — fichier introuvable : /assets/partage/accueil-fr.jpg
- **image de partage** — `sur-mesure.html` — fichier introuvable : /assets/partage/sur-mesure-fr.jpg

### premier écran : information clé hors de l’écran (5)

- **premier écran : information clé hors de l’écran** — `/` — section#debut > div.ouv-texte:nth-of-type(1) > p.hero-info:nth-of-type(3) « 35 € · 21 × 16 cm · prête en 10 à 15 jours » _(320×568 normal, 320×568 sansJs)_
- **premier écran : information clé hors de l’écran** — `/404` — section#debut > div.conteneur.ouv-plein-texte > p.visuellement-cache:nth-of-type(3) « La page que vous cherchez n'est pas (ou plus) ici. » _(320×568 normal, 844×390 normal, 390×844 normal, 768×1024 normal, 390×844 sansJs, 1366×768 normal, +5)_
- **premier écran : information clé hors de l’écran** — `/atelier` — section#debut > div.conteneur.ouv-plein-texte > div.hero-actions > span.hero-info « Créations depuis 2016 » _(320×568 normal, 390×844 normal, 390×844 sansJs, 390×844 sansWebgl, 320×568 sansJs)_
- **premier écran : information clé hors de l’écran** — `/contact` — section#debut > div.conteneur.ouv-contact-grille > div > p.hero-info:nth-of-type(3) « Lingolsheim (67380), près de Strasbourg » _(320×568 normal, 320×568 sansJs)_
- **premier écran : information clé hors de l’écran** — `/sur-mesure` — section#debut > div.conteneur.ouv-prix-grille > div.prix-geant:nth-of-type(2) > p.prix-chiffre:nth-of-type(1) « 35 € la boîte » _(320×568 normal, 320×568 sansJs)_

### contraste insuffisant (2)

- **contraste insuffisant** — `/` — section#occasions > div.mots-geants:nth-of-type(1) > p:nth-of-type(1) « Mariage · Anniversaire · Vacances · Mariage · Anni » — 1.33:1 (minimum 3:1) _(768×1024 normal, 390×844 normal, 320×568 normal, 844×390 normal, 390×844 sansJs, 1366×768 normal, +5)_
- **contraste insuffisant** — `/` — section#occasions > div.mots-geants:nth-of-type(1) > p:nth-of-type(2) « Animal de compagnie · Moment important · Animal de » — 1.53:1 (minimum 3:1) _(768×1024 normal, 390×844 normal, 320×568 normal, 844×390 normal, 390×844 sansJs, 1366×768 normal, +5)_

### photo faible affichée en grand (4)

- **photo faible affichée en grand** — `/` — div.conteneur.carine-grille > figure.media.carine-media > picture > img « Un coin d'établi : bocaux de sable et de coquillag » — grok/atelier-etabli (4/5, faible, 63 % de l'écran) : en vignette, ou une meilleure image _(390×844 normal)_
- **photo faible affichée en grand** — `/` — div.conteneur.carine-grille > figure.media.carine-media > picture > img « Un coin d'établi : bocaux de sable et de coquillag » — grok/atelier-etabli (4/5, faible, 47 % de l'écran) : en vignette, ou une meilleure image _(1366×768 normal)_
- **photo faible affichée en grand** — `/contact` — div.conteneur.ouv-contact-grille > figure.media.contact-media > picture > img « Une enveloppe kraft, des photos imprimées retourné » — grok/contact-ouverture (4/5, faible, 43 % de l'écran) : en vignette, ou une meilleure image _(390×844 normal)_
- **photo faible affichée en grand** — `/contact` — div.conteneur.ouv-contact-grille > figure.media.contact-media > picture > img « Une enveloppe kraft, des photos imprimées retourné » — grok/contact-ouverture (4/5, faible, 26 % de l'écran) : en vignette, ou une meilleure image _(1366×768 normal)_

### accessibilité (axe) : color-contrast (1)

- **accessibilité (axe) : color-contrast** — `/` — p[data-fx-rangee=""]:nth-child(1) ; p[data-sens="-1"] — Elements must meet minimum color contrast ratio thresholds _(390×844 normal, 1366×768 normal)_

### contraste sur image (5)

- **contraste sur image** — `/404` — h1.titre-xl > span.ligne-masque > span.hero-ligne > em « vide » — 2.34:1 sur les 10 % de la photo les moins favorables (minimum 3:1) _(390×844 normal)_
- **contraste sur image** — `/404` — h1.titre-xl > span.ligne-masque > span.hero-ligne > em « vide » — 1.55:1 sur les 10 % de la photo les moins favorables (minimum 3:1) _(1366×768 normal)_
- **contraste sur image** — `/404` — section#debut > div.conteneur.ouv-plein-texte > p.chapeau:nth-of-type(1) « La page que vous cherchez n'est pas (ou plus) ici. » — 3.25:1 sur les 10 % de la photo les moins favorables (minimum 4.5:1) _(1366×768 normal)_
- **contraste sur image** — `/atelier` — section#debut > div.conteneur.ouv-plein-texte > p.surtitre:nth-of-type(1) « L'ATELIER » — 3.63:1 sur les 10 % de la photo les moins favorables (minimum 4.5:1) _(1366×768 normal)_
- **contraste sur image** — `/atelier` — h1.titre-xl > span.ligne-masque > span.hero-ligne > em « main » — 2.38:1 sur les 10 % de la photo les moins favorables (minimum 3:1) _(1366×768 normal)_

### premier écran : bouton principal hors de l’écran (1)

- **premier écran : bouton principal hors de l’écran** — `/atelier` — section#debut > div.conteneur.ouv-plein-texte > div.hero-actions > a.bouton « Commander une boîte » _(390×844 sansJs, 320×568 sansJs)_

### texte coupé (4)

- **texte coupé** — `/creations` — section#debut > div.mur:nth-of-type(2) > div.mur-boite.mur-boite--1:nth-of-type(1) > span.mur-legende.main « Laponie Finlandaise » — le contenu dépasse de son cadre _(390×844 normal, 320×568 normal, 768×1024 normal, 844×390 normal, 390×844 sansJs, 390×844 sansWebgl, +1)_
- **texte coupé** — `/creations` — section#debut > div.mur:nth-of-type(2) > div.mur-boite.mur-boite--2:nth-of-type(2) > span.mur-legende.main « Un amour de Virgul » — le contenu dépasse de son cadre _(390×844 normal, 320×568 normal, 844×390 normal, 390×844 sansJs, 390×844 sansWebgl, 320×568 sansJs)_
- **texte coupé** — `/creations` — section#debut > div.mur:nth-of-type(2) > div.mur-boite.mur-boite--3:nth-of-type(3) > span.mur-legende.main « Just married… again ! » — le contenu dépasse de son cadre _(390×844 normal, 320×568 normal, 844×390 normal, 390×844 sansJs, 390×844 sansWebgl, 320×568 sansJs)_
- **texte coupé** — `/creations` — section#debut > div.mur:nth-of-type(2) > div.mur-boite.mur-boite--4:nth-of-type(4) > span.mur-legende.main « Mon Papa et Moi » — le contenu dépasse de son cadre _(844×390 normal)_

### textes qui se chevauchent (3)

- **textes qui se chevauchent** — `/creations` — section#debut > div.mur:nth-of-type(2) > div.mur-boite.mur-boite--2:nth-of-type(2) > span.mur-legende.main « Un amour de Virgul » — avec section#debut > div.mur:nth-of-type(2) > div.mur-boite.mur-boite--3:nth-of-type(3) > span.mur-legende.main « Just married… again ! » _(320×568 normal, 320×568 sansJs)_
- **textes qui se chevauchent** — `/creations` — div.galerie-tete > div:nth-of-type(1) > p.chapeau > span.aide-tactile:nth-of-type(1) « Touchez une boîte pour la voir en grand. » — avec div.galerie-tete > div:nth-of-type(1) > p.chapeau > span:nth-of-type(3) « 14 boîtes » _(320×568 normal, 320×568 sansJs)_
- **textes qui se chevauchent** — `/sur-mesure` — div.composeur-grille:nth-of-type(2) > div.apercu > p.apercu-mention > strong « Aperçu illustratif » — avec div.composeur-grille:nth-of-type(2) > div.apercu > p.apercu-mention > span.apercu-exemple « Exemple d'une vraie boîte : la vôtre sera composée » _(390×844 sansJs, 320×568 sansJs)_

### accessibilité (axe) : aria-allowed-attr (1)

- **accessibilité (axe) : aria-allowed-attr** — `/creations` — .echelle-cartel — Elements must only use supported ARIA attributes _(390×844 normal, 1366×768 normal)_

### positions non recalculées après un changement de hauteur (2)

- **positions non recalculées après un changement de hauteur** — `/creations` — Accrochée — décalage de 30 px _(1366×768)_
- **positions non recalculées après un changement de hauteur** — `/creations` — Posée — décalage de 47 px _(1366×768)_

## À regarder

### « à compléter » visible (1)

- **« à compléter » visible** — `contact.html` — 1 fois hors du pied de page : remplacer par une phrase vraie qui oriente le visiteur (« Tarifs selon la saison, donnés à la réservation ») ou retirer l'élément, et le noter dans la fiche du README (sauf sens propre : « dossier à compléter »)

### grille : effet signature qui ne se manipule pas (point 1) (1)

- **grille : effet signature qui ne se manipule pas (point 1)** — `/` — aucun élément data-grille="manipuler" sur l’accueil : objet à attraper, faire tourner ou glisser (module objet-a-faire-tourner, lumiere-au-pointeur…)

### grille : rien ne relie les sections (point 4) (1)

- **grille : rien ne relie les sections (point 4)** — sur aucune page : élément du métier qui relie les sections et les pages (fil dans la marge, objet unique qui change, lumière qui passe, carte, folio, frise), marqué data-grille="fil"

### grille : aucun titre ne fait l’événement (point 5) (1)

- **grille : aucun titre ne fait l’événement (point 5)** — sur aucune page : titre fabriqué par le métier, axe de police animé ou titre joué avec l’image (modules axes-au-defilement, titre-cousu, texte-grave-en-direct), marqué data-grille="typo"

### grille : action principale sans retour physique (point 7) (1)

- **grille : action principale sans retour physique (point 7)** — ajout au panier, réservation, envoi ou filtre : quelque chose de l’objet part, se pose ou se transforme (module envol-vers-le-panier, tampon « reçu »), marqué data-grille="retour"

### texte de contenu sous 13 px (ordinateur) (18)

- **texte de contenu sous 13 px (ordinateur)** — `/` — div.plans-collant > div.conteneur.plans-grille > div.plans-scene:nth-of-type(2) > p.mention-schema « Schéma illustratif » — 12.8 px : surtitres et légendes à 13 px au moins, textes de cartes à 15 px _(1366×768 normal, 1920×1080 normal, 1366×768 sansJs, 1366×768 sansWebgl)_
- **texte de contenu sous 13 px (ordinateur)** — `/` — section#carine > div.conteneur.carine-grille > figure.media.carine-media > figcaption.mention-ia « Illustration générée » — 12.0 px : surtitres et légendes à 13 px au moins, textes de cartes à 15 px _(1366×768 normal, 1920×1080 normal, 1366×768 sansJs, 1366×768 sansWebgl)_
- **texte de contenu sous 13 px (ordinateur)** — `/404` — section#debut > figure.media.ouv-plein-media > figcaption.mention-ia « Illustration générée » — 12.0 px : surtitres et légendes à 13 px au moins, textes de cartes à 15 px _(1366×768 normal, 1920×1080 normal, 1366×768 sansJs, 1366×768 sansWebgl)_
- **texte de contenu sous 13 px (ordinateur)** — `/atelier` — section#debut > figure.media.ouv-plein-media > figcaption.mention-ia « Illustration générée » — 12.0 px : surtitres et légendes à 13 px au moins, textes de cartes à 15 px _(1920×1080 normal, 1366×768 normal, 1366×768 sansJs, 1366×768 sansWebgl)_
- **texte de contenu sous 13 px (ordinateur)** — `/atelier` — li#geste-boitier > figure.media.geste-media > figcaption.mention-ia « Illustration générée » — 12.0 px : surtitres et légendes à 13 px au moins, textes de cartes à 15 px _(1920×1080 normal, 1366×768 normal, 1366×768 sansJs, 1366×768 sansWebgl)_
- **texte de contenu sous 13 px (ordinateur)** — `/atelier` — li#geste-verre > figure.media.geste-media > figcaption.mention-ia « Illustration générée » — 12.0 px : surtitres et légendes à 13 px au moins, textes de cartes à 15 px _(1920×1080 normal, 1366×768 normal, 1366×768 sansJs, 1366×768 sansWebgl)_
- **texte de contenu sous 13 px (ordinateur)** — `/atelier` — li#geste-plans > figure.media.geste-media > figcaption.mention-ia « Illustration générée » — 12.0 px : surtitres et légendes à 13 px au moins, textes de cartes à 15 px _(1920×1080 normal, 1366×768 normal, 1366×768 sansJs, 1366×768 sansWebgl)_
- **texte de contenu sous 13 px (ordinateur)** — `/atelier` — li#geste-matieres > figure.media.geste-media > figcaption.mention-ia « Illustration générée » — 12.0 px : surtitres et légendes à 13 px au moins, textes de cartes à 15 px _(1920×1080 normal, 1366×768 normal, 1366×768 sansJs, 1366×768 sansWebgl)_
- **texte de contenu sous 13 px (ordinateur)** — `/atelier` — ul.matieres-liste.fx-fini > li.matiere:nth-of-type(1) > figure.media.dev > figcaption.mention-ia « Illustration générée » — 12.0 px : surtitres et légendes à 13 px au moins, textes de cartes à 15 px _(1920×1080 normal, 1366×768 normal, 1366×768 sansWebgl)_
- **texte de contenu sous 13 px (ordinateur)** — `/atelier` — ul.matieres-liste.fx-fini > li.matiere:nth-of-type(2) > figure.media.dev > figcaption.mention-ia « Illustration générée » — 12.0 px : surtitres et légendes à 13 px au moins, textes de cartes à 15 px _(1920×1080 normal, 1366×768 normal, 1366×768 sansWebgl)_
- **texte de contenu sous 13 px (ordinateur)** — `/atelier` — ul.matieres-liste.fx-fini > li.matiere:nth-of-type(3) > figure.media.dev > figcaption.mention-ia « Illustration générée » — 12.0 px : surtitres et légendes à 13 px au moins, textes de cartes à 15 px _(1920×1080 normal, 1366×768 normal, 1366×768 sansWebgl)_
- **texte de contenu sous 13 px (ordinateur)** — `/atelier` — ul.matieres-liste.fx-fini > li.matiere:nth-of-type(4) > figure.media.dev > figcaption.mention-ia « Illustration générée » — 12.0 px : surtitres et légendes à 13 px au moins, textes de cartes à 15 px _(1920×1080 normal, 1366×768 normal, 1366×768 sansWebgl)_
- **texte de contenu sous 13 px (ordinateur)** — `/atelier` — ul.matieres-liste > li.matiere:nth-of-type(1) > figure.media.dev > figcaption.mention-ia « Illustration générée » — 12.0 px : surtitres et légendes à 13 px au moins, textes de cartes à 15 px _(1366×768 sansJs)_
- **texte de contenu sous 13 px (ordinateur)** — `/atelier` — ul.matieres-liste > li.matiere:nth-of-type(2) > figure.media.dev > figcaption.mention-ia « Illustration générée » — 12.0 px : surtitres et légendes à 13 px au moins, textes de cartes à 15 px _(1366×768 sansJs)_
- **texte de contenu sous 13 px (ordinateur)** — `/atelier` — ul.matieres-liste > li.matiere:nth-of-type(3) > figure.media.dev > figcaption.mention-ia « Illustration générée » — 12.0 px : surtitres et légendes à 13 px au moins, textes de cartes à 15 px _(1366×768 sansJs)_
- **texte de contenu sous 13 px (ordinateur)** — `/atelier` — ul.matieres-liste > li.matiere:nth-of-type(4) > figure.media.dev > figcaption.mention-ia « Illustration générée » — 12.0 px : surtitres et légendes à 13 px au moins, textes de cartes à 15 px _(1366×768 sansJs)_
- **texte de contenu sous 13 px (ordinateur)** — `/contact` — section#debut > div.conteneur.ouv-contact-grille > figure.media.contact-media > figcaption.mention-ia « Illustration générée » — 12.0 px : surtitres et légendes à 13 px au moins, textes de cartes à 15 px _(1366×768 normal, 1920×1080 normal, 1366×768 sansJs, 1366×768 sansWebgl)_
- **texte de contenu sous 13 px (ordinateur)** — `/contact` — section#acces > div.conteneur.acces-grille > figure.carte-acces > figcaption.mention-schema « Schéma illustratif » — 12.8 px : surtitres et légendes à 13 px au moins, textes de cartes à 15 px _(1366×768 normal, 1920×1080 normal, 1366×768 sansJs, 1366×768 sansWebgl)_

### section sans visuel (2)

- **section sans visuel** — `/contact` — section#formulaire « FORMULAIRE Un message rapide Pour envoyer vos phot » — une belle photo ou un visuel animé quand le contenu s’y prête ; une section de texte peut rester typographique (v11) _(320×568 normal, 390×844 normal, 390×844 sansJs, 390×844 sansWebgl, 320×568 sansJs)_
- **section sans visuel** — `/sur-mesure` — section#questions « QUESTIONS Avant de commander Combien coûte une boî » — une belle photo ou un visuel animé quand le contenu s’y prête ; une section de texte peut rester typographique (v11) _(320×568 normal, 768×1024 normal, 390×844 normal, 844×390 normal, 390×844 sansJs, 1366×768 normal, +5)_

### typographie française (2)

- **typographie française** — `/sur-mesure` — div.composeur-grille:nth-of-type(2) > div.apercu > div.apercu-boite > p.apercu-legende.main « Just married… again ! » — espace insécable manquante avant ou après « ! » _(1366×768 normal)_
- **typographie française** — `/sur-mesure` — div.composeur-grille:nth-of-type(2) > div.apercu > p.apercu-mention > span.apercu-exemple « Exemple : Just married… again ! » — espace insécable manquante avant ou après « : ! » _(1366×768 normal)_

### effet qui ne bouge pas au défilement (3)

- **effet qui ne bouge pas au défilement** — `/` — div.pile — profondeur : il ne bouge ni au défilement ni tout seul à cette taille (effet au survol, au clic, ou réservé à l'ordinateur ?) ; il ne compte pas comme effet de section _(1366×768 normal, 390×844 normal)_
- **effet qui ne bouge pas au défilement** — `/` — ul.rangee-piste — glissement : il ne bouge ni au défilement ni tout seul à cette taille (effet au survol, au clic, ou réservé à l'ordinateur ?) ; il ne compte pas comme effet de section _(390×844 normal)_
- **effet qui ne bouge pas au défilement** — `/` — figure.media.dev — developpement : il ne bouge ni au défilement ni tout seul à cette taille (effet au survol, au clic, ou réservé à l'ordinateur ?) ; il ne compte pas comme effet de section _(390×844 normal)_

## Non lancé

- **Safari (WebKit)** : WebKit ne peut pas s’installer ici : vérification à faire dans Safari sur le Mac (liste dans le rapport)

### À vérifier dans Safari sur le Mac (WebKit indisponible ici)

- Ouverture de chaque page : rien qui clignote, intro complète au premier chargement et au rechargement.
- Changement de page : le voile couvre l’écran, pas de page blanche ; retour arrière sans intro ni voile resté.
- Défilement : fluide (natif), en-tête qui se cache et revient sans clignoter, sections épinglées entières.
- Menu sur iPhone (mode Responsive de Safari) : ouverture, fermeture, page bloquée derrière.
- Polices, images, mention « Illustration générée », formulaires et barre fixe du bas.

## Repères

- Numéro de version des fichiers : ?v=1
- Journal v1 : 6 étape(s) notée(s), 52 min de travail pour 115 min de budget, 10 min d’attente de l’utilisateur.
- Audit standard : étapes lourdes sur /, /atelier, /creations, /sur-mesure.
- Accessibilité : axe-core 4.12.1 en plus des contrôles intégrés.
- Ouverture / (1366×768) : 2650 ms depuis le premier octet
- Ouverture /atelier (1366×768) : 2579 ms depuis le premier octet
- Ouverture /creations (1366×768) : 2561 ms depuis le premier octet
- film de l'ouverture /creations 1366×768 : réussi à la tentative 2 (avant : cdpSession.send: Protocol error (Page.startScreencast): Not attached to an active page)
- Ouverture /sur-mesure (1366×768) : 2644 ms depuis le premier octet
- film de l'ouverture /sur-mesure 1366×768 : réussi à la tentative 2 (avant : cdpSession.send: Protocol error (Page.startScreencast): Not attached to an active page)
- Ouverture / (390×844) : 2653 ms depuis le premier octet
- Ouverture /atelier (390×844) : 2533 ms depuis le premier octet
- Ouverture /creations (390×844) : 2542 ms depuis le premier octet
- Ouverture /sur-mesure (390×844) : 2661 ms depuis le premier octet
- bords de l’écran /creations 1366×768 : réussi à la tentative 2 (avant : cdpSession.send: Protocol error (Page.startScreencast): Not attached to an active page)
- Bords de l’écran : 456 images d’intro, 32 de voile et 112 de menu jugées (panneau immobile couvrant tout l’écran), barre de défilement classique de 15 px.
- Aucun parcours propre au projet (_audit/parcours.mjs) : filtres, calculateurs, panier, réservation, fenêtres testés seulement par les contrôles généraux.
- Tient dans l'écran / : aucune section épinglée ou plein écran.
- Tient dans l'écran /atelier : aucune section épinglée ou plein écran.
- Tient dans l'écran /contact : aucune section épinglée ou plein écran.
- Tient dans l'écran /creations : aucune section épinglée ou plein écran.
- Tient dans l'écran /sur-mesure : aucune section épinglée ou plein écran.
- Fluidité / 1366×768 (molette) : 0 % d'images lentes sur 393, tâche la plus longue 0 ms
- Fluidité /atelier 1366×768 (molette) : 0 % d'images lentes sur 284, tâche la plus longue 0 ms
- Fluidité /creations 1366×768 (molette) : 0 % d'images lentes sur 227, tâche la plus longue 0 ms
- Fluidité /sur-mesure 1366×768 (molette) : 0 % d'images lentes sur 212, tâche la plus longue 0 ms
- Fluidité / 390×844 (doigt) : 0 % d'images lentes sur 1354, tâche la plus longue 0 ms
- Fluidité /atelier 390×844 (doigt) : 0 % d'images lentes sur 1344, tâche la plus longue 0 ms
- Fluidité /creations 390×844 (doigt) : 0 % d'images lentes sur 1351, tâche la plus longue 0 ms
- Fluidité /sur-mesure 390×844 (doigt) : 0 % d'images lentes sur 1338, tâche la plus longue 0 ms
- Vitesse / : 0.43 s de calcul au chargement (téléphone ralenti).
- Vitesse /atelier : 0.37 s de calcul au chargement (téléphone ralenti).
- Vitesse /contact : 0.31 s de calcul au chargement (téléphone ralenti).
- Vitesse /creations : 0.38 s de calcul au chargement (téléphone ralenti).
- Vitesse /sur-mesure : 0.40 s de calcul au chargement (téléphone ralenti).

## Fichiers

- Captures : `captures/` (téléphone, tablette, ordinateur, écran par écran)
- Films : `films/` (planches contact de l’ouverture, des transitions, des retours, des ancres et des épinglages ; ⚠ = image signalée)
- Comparaisons : `comparaisons/`
- Détail complet : `rapport.json`


## Relancer seulement ce qui a échoué

Après correction, si elle ne touche que ces pages (sinon, relancer l’audit standard en entier) :

```
node _audit/audit.mjs --seulement=fichiers,mesures,parcours
```
