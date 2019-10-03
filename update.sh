#!/bin/bash


echo "Removendo arquivos antigos"

rm asset-manifest.json
rm favicon.ico
rm index.html
rm manifest.json
rm precache-manifest.*.js
rm service-worker.js
rm -r static

echo "Buscando novos arquivos"

cp ../sistema/build/* ./

git add .
git commit -m 'Atualização automática via update.sh'
git push
