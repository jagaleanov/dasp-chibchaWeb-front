#!/usr/bin/env sh

# abort on errors
set -e

# build
npm run build

# navigate into the build output directory
cd dist

# if you are deploying to a custom domain
# echo 'www.example.com' > CNAME

git init
git add -A
git commit -m 'deploy'

# if you are deploying to https://<USERNAME>.github.io
# git push -f git@github.com:<USERNAME>/<USERNAME>.github.io.git main

# if you are deploying to https://<USERNAME>.github.io/<REPO>
git push -f git@github.com:jagaleanov/dasp-chibchaWeb.git main:gh-pages

cd -



# me gusta coleccionar plantas y entre ellas prefiero las carnivoras
# me va bien en matematicas y pasé todos los calculos de una sola
# suelo tocar varios instrumentos: la guitarra, el bajo y el piano