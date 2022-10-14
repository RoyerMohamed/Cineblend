#!/usr/bin/env sh
set -e

npm run build

cd dist

git init 
git add -A 
git commit -m 'New Deployemnt'
git push -f git@github.com:RoyerMohamed/Cineblend.git main:gh-pages

cd -