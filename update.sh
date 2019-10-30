#!/bin/bash

git checkout master
shopt -s extglob
rm -rf -- !("."|".."|".git"|"update.sh"|"build")
shopt -u extglob
mv build/* ./
rmdir build
git add .
git commit -m 'Site atualizado usando update.sh'
git push
echo "https://josephseraos.github.io"
git checkout source
