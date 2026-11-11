# Portfolio - Elliot Clerice

Site personnel bilingue (FR / EN), construit avec Vite, Vue 3 et Tailwind CSS v4.

## Développement

```sh
npm install
npm run dev      # serveur local
npm run build    # génère dist/
```

## Déploiement

Chaque fusion dans `main` compile et publie le site sur GitHub Pages
(`.github/workflows/deploy.yml`). Dans Settings > Pages, la source doit être
« GitHub Actions ».

## Modifier le contenu

Tous les textes (français et anglais) sont dans `src/content.js`.
Le CV téléchargeable est `public/files/CV_Elliot_Clerice.pdf`.
