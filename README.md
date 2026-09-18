# Journées du Patrimoine 2026 — Paris

Petit site statique présentant un itinéraire à pied sur deux jours (samedi 19 et dimanche 20 septembre 2026) pour les Journées Européennes du Patrimoine à Paris, pensé pour un groupe de 20-30 personnes.

Principe : uniquement des lieux qui n'ouvrent que ce week-end (ministères, hôtels particuliers, institutions normalement fermées au public) — pas de monuments déjà ouverts toute l'année (Louvre, Tour Eiffel, Panthéon...). Une journée = une zone géographique marchable, avec une colonne vertébrale gratuite et sans réservation et des lieux d'exception en bonus individuel (Sénat, Assemblée nationale, ambassades…).

- **Samedi — Rive Gauche** : 5e → 6e → 7e — Pavillon Boncourt, Collège de France, Mines Paris-PSL, Fondation Charles de Gaulle, ministères de l'Éducation nationale et de la Transition écologique.
- **Dimanche — Rive Droite** : 1er → Marais → Haut-Marais — Cour des Comptes, ministère de la Culture, Crédit Municipal, Couvent de la Merci, Hôtel de Marle, Hôtel Lamoignon, Hôtel de Sully.

La sélection reprend et vérifie pour 2026 les repérages personnels de l'organisateur (issus de deux années précédentes), plutôt que les têtes d'affiche touristiques habituelles.

Contenu constitué à partir de :
- [journeesdupatrimoine.culture.gouv.fr](https://journeesdupatrimoine.culture.gouv.fr) (site officiel du ministère de la Culture)
- [paris.fr](https://www.paris.fr) (Ville de Paris)
- [sortiraparis.com](https://www.sortiraparis.com) (guide des parcours par arrondissement)

## Voir le site

Une fois publié sur GitHub Pages : `https://<username>.github.io/<repo>/`

## Structure

- `index.html` — page unique avec bascule Samedi / Dimanche / Extras hors zone
- `fiche.html` — tableau dense et imprimable pour le jour J (heure, lieu, pourquoi c'est unique, réservation, lien)
- `assets/style.css` — styles de la page principale (clair/sombre automatique)
- `assets/fiche.css` — styles de la fiche (grille stricte, impression)
- `assets/script.js` — bascule entre les jours et partage natif/copie de lien de secours
- `docs/media/STRATEGIE_MEDIA.md` — positionnement, publics, canaux, indicateurs et règles de communication
- `docs/media/CALENDRIER_EDITORIAL.md` — déroulé d’activation de J-2 à J+3
- `docs/media/COPY_SOCIALE.md` — messages et publications prêts à adapter
- `docs/media/NOTE_MEDIA.md` — présentation pour relais culturels et agendas

## Diffusion et partage

Le site est publié à l’adresse : <https://josephboulange0-gif.github.io/Journ-es-du-patrimoine-Paris-2026/>. Les métadonnées de partage et le bouton « Partager le parcours » utilisent cette URL de référence. Le kit de communication est volontairement indépendant : les horaires, ouvertures et réservations doivent toujours être vérifiés auprès des organisateurs et du [programme officiel](https://journeesdupatrimoine.culture.gouv.fr/programme).

## Limites

Les places, horaires et disponibilités des visites sur réservation évoluent en continu à l'approche du week-end. Chaque carte renvoie vers sa source officielle pour vérifier avant de se déplacer.
