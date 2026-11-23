# Rapport d’audit

Projet : `c-est-dans-la-boite-maquette` · 23/11/2026 15:07:17 · 21 min · 6 page(s) · audit complet

## Résumé

- Statut : **tout a tourné, aucun échec**
- Passe : `20261123-134610-complet` · version ?v=2
- Échecs : **0**
- À regarder : **9**
- Non lancé : **1**
- Contrôles passés : vercel.json (1), .vercelignore (1), robots.txt (1), numéro de version (1), langues (1), grille wouahou (5), mesures (234), balayage (5), films d’ouverture (10), films de transition (10), bords de l’écran (6), intro accélérable et passable (7), menu (1), clavier (6), liens et boutons (6), liens profonds (10), liens vers la page en cours (5), changements de hauteur (5), fluidité (10), défilement selon l’appareil (5), mouvement (10), effets du plan (7), souris immobile (5), vitesse (5), captures (1)

## Grille wouahou

| Point | État | Détail |
|---|---|---|
| 1. L’effet signature se manipule | ✓ présent | accueil |
| 2. L’intro devient la page | ✓ présent | objet d’ouverture sur 5 page(s), versObjet dans l’intro |
| 3. La transition reprend le motif | ✓ présent | voile en iris |
| 4. Quelque chose relie les sections et les pages | ⚠ à regarder | présent sur /creations, / ; absent sur /atelier, /contact, /sur-mesure |
| 5. Un titre fait l’événement sur chaque page | ⚠ à regarder | présent sur / ; absent sur /atelier, /contact, /creations, /sur-mesure |
| 6. La scène est un geste du métier | · sans objet | aucune scène épinglée marquée ni galerie générique |
| 7. L’action principale a un retour physique | ✓ présent | sur /sur-mesure |

Le script vérifie les marques (`data-grille`, `data-iris-centre`, forme du voile, `versObjet`) ; la force et la justesse de chaque point se jugent sur les captures et les films.

## Passes de cette version (?v=2)

Chaque passe garde son rapport dans `_audit/passes/` : une relance ciblée ne fait pas disparaître la preuve d’une passe plus large.

| Passe | Niveau | Pages | Étapes | Échecs | À regarder | Non lancé | Statut |
|---|---|---|---|---:|---:|---:|---|
| 20261123-133307-rapide | rapide | toutes | toutes | 1 | 7 | 1 | échecs |
| 20261123-134117-rapide | rapide | toutes | toutes | 0 | 9 | 1 | complet |
| **20261123-134610-complet** (celle-ci) | complet | toutes | toutes | 0 | 9 | 1 | complet |

## Échecs

Aucun.

## À regarder

### « à compléter » visible (1)

- **« à compléter » visible** — `contact.html` — 1 fois hors du pied de page : remplacer par une phrase vraie qui oriente le visiteur (« Tarifs selon la saison, donnés à la réservation ») ou retirer l'élément, et le noter dans la fiche du README (sauf sens propre : « dossier à compléter »)

### grille : rien ne relie les sections (point 4) (3)

- **grille : rien ne relie les sections (point 4)** — `/atelier` — absent de cette page : élément du métier qui relie les sections et les pages (fil dans la marge, objet unique qui change, lumière qui passe, carte, folio, frise), marqué data-grille="fil"
- **grille : rien ne relie les sections (point 4)** — `/contact` — absent de cette page : élément du métier qui relie les sections et les pages (fil dans la marge, objet unique qui change, lumière qui passe, carte, folio, frise), marqué data-grille="fil"
- **grille : rien ne relie les sections (point 4)** — `/sur-mesure` — absent de cette page : élément du métier qui relie les sections et les pages (fil dans la marge, objet unique qui change, lumière qui passe, carte, folio, frise), marqué data-grille="fil"

### grille : aucun titre ne fait l’événement (point 5) (4)

- **grille : aucun titre ne fait l’événement (point 5)** — `/atelier` — absent de cette page : titre fabriqué par le métier, axe de police animé ou titre joué avec l’image (modules axes-au-defilement, titre-cousu, texte-grave-en-direct), marqué data-grille="typo"
- **grille : aucun titre ne fait l’événement (point 5)** — `/contact` — absent de cette page : titre fabriqué par le métier, axe de police animé ou titre joué avec l’image (modules axes-au-defilement, titre-cousu, texte-grave-en-direct), marqué data-grille="typo"
- **grille : aucun titre ne fait l’événement (point 5)** — `/creations` — absent de cette page : titre fabriqué par le métier, axe de police animé ou titre joué avec l’image (modules axes-au-defilement, titre-cousu, texte-grave-en-direct), marqué data-grille="typo"
- **grille : aucun titre ne fait l’événement (point 5)** — `/sur-mesure` — absent de cette page : titre fabriqué par le métier, axe de police animé ou titre joué avec l’image (modules axes-au-defilement, titre-cousu, texte-grave-en-direct), marqué data-grille="typo"

### effet qui ne bouge pas au défilement (1)

- **effet qui ne bouge pas au défilement** — `/` — img — developpement : il ne bouge ni au défilement ni tout seul à cette taille (effet au survol, au clic, ou réservé à l'ordinateur ?) ; il ne compte pas comme effet de section _(390×844 normal)_

## Non lancé

- **Safari (WebKit)** : WebKit ne peut pas s’installer ici : vérification à faire dans Safari sur le Mac (liste dans le rapport)

### À vérifier dans Safari sur le Mac (WebKit indisponible ici)

- Ouverture de chaque page : rien qui clignote, intro complète au premier chargement et au rechargement.
- Changement de page : le voile couvre l’écran, pas de page blanche ; retour arrière sans intro ni voile resté.
- Défilement : fluide (natif), en-tête qui se cache et revient sans clignoter, sections épinglées entières.
- Menu sur iPhone (mode Responsive de Safari) : ouverture, fermeture, page bloquée derrière.
- Polices, images, mention « Illustration générée », formulaires et barre fixe du bas.

## Repères

- Numéro de version des fichiers : ?v=2
- Journal v2 : 3 étape(s) notée(s), 21 min de travail pour 75 min de budget, 0 min d’attente de l’utilisateur.
- Accessibilité : axe-core 4.12.1 en plus des contrôles intégrés.
- Ouverture / (1366×768) : 2637 ms depuis le premier octet
- Ouverture /atelier (1366×768) : 2512 ms depuis le premier octet
- Ouverture /contact (1366×768) : 2583 ms depuis le premier octet
- Ouverture /creations (1366×768) : 2893 ms depuis le premier octet
- Ouverture /sur-mesure (1366×768) : 2581 ms depuis le premier octet
- Ouverture / (390×844) : 2645 ms depuis le premier octet
- Ouverture /atelier (390×844) : 2539 ms depuis le premier octet
- film de l'ouverture /atelier 390×844 : réussi à la tentative 2 (avant : cdpSession.send: Protocol error (Page.startScreencast): Not attached to an active page)
- Ouverture /contact (390×844) : 2593 ms depuis le premier octet
- Ouverture /creations (390×844) : 2910 ms depuis le premier octet
- Ouverture /sur-mesure (390×844) : 2628 ms depuis le premier octet
- bords de l’écran / 1366×768 : réussi à la tentative 2 (avant : cdpSession.send: Protocol error (Page.startScreencast): Not attached to an active page)
- bords de l’écran /creations 1366×768 : réussi à la tentative 2 (avant : cdpSession.send: Protocol error (Page.startScreencast): Not attached to an active page)
- Bords de l’écran : 565 images d’intro, 34 de voile et 134 de menu jugées (panneau immobile couvrant tout l’écran), barre de défilement classique de 15 px.
- Aucun parcours propre au projet (_audit/parcours.mjs) : filtres, calculateurs, panier, réservation, fenêtres testés seulement par les contrôles généraux.
- Tient dans l'écran / : aucune section épinglée ou plein écran.
- Tient dans l'écran /atelier : aucune section épinglée ou plein écran.
- Tient dans l'écran /contact : aucune section épinglée ou plein écran.
- Tient dans l'écran /creations : aucune section épinglée ou plein écran.
- Tient dans l'écran /sur-mesure : aucune section épinglée ou plein écran.
- Fluidité / 1366×768 (molette) : 0 % d'images lentes sur 435, tâche la plus longue 51 ms
- Fluidité /atelier 1366×768 (molette) : 0 % d'images lentes sur 275, tâche la plus longue 59 ms
- Fluidité /contact 1366×768 (molette) : 0 % d'images lentes sur 152, tâche la plus longue 0 ms
- Fluidité /creations 1366×768 (molette) : 0 % d'images lentes sur 229, tâche la plus longue 0 ms
- Fluidité /sur-mesure 1366×768 (molette) : 0 % d'images lentes sur 221, tâche la plus longue 0 ms
- Fluidité / 390×844 (doigt) : 0 % d'images lentes sur 1344, tâche la plus longue 0 ms
- Fluidité /atelier 390×844 (doigt) : 0 % d'images lentes sur 1342, tâche la plus longue 0 ms
- Fluidité /contact 390×844 (doigt) : 0 % d'images lentes sur 1340, tâche la plus longue 0 ms
- Fluidité /creations 390×844 (doigt) : 0 % d'images lentes sur 1345, tâche la plus longue 0 ms
- Fluidité /sur-mesure 390×844 (doigt) : 0 % d'images lentes sur 1342, tâche la plus longue 0 ms
- Vitesse / : 0.46 s de calcul au chargement (téléphone ralenti).
- Vitesse /atelier : 0.31 s de calcul au chargement (téléphone ralenti).
- Vitesse /contact : 0.26 s de calcul au chargement (téléphone ralenti).
- Vitesse /creations : 0.33 s de calcul au chargement (téléphone ralenti).
- Vitesse /sur-mesure : 0.34 s de calcul au chargement (téléphone ralenti).

## Fichiers

- Captures : `captures/` (téléphone, tablette, ordinateur, écran par écran)
- Films : `films/` (planches contact de l’ouverture, des transitions, des retours, des ancres et des épinglages ; ⚠ = image signalée)
- Comparaisons : `comparaisons/`
- Détail complet : `rapport.json`
