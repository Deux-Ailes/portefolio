#!/usr/bin/env sh
# Builds the site and publishes dist/ to the gh-pages branch (GitHub Pages).
set -e

npm run build
cd dist
git init -q
git add -A
git commit -qm 'deploy'
git push -f git@github.com:deux-ailes/portefolio.git HEAD:gh-pages
cd -
