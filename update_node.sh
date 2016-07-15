#!/bin/bash
echo "Version"

node --version
npm --version


echo "Get dependencies "

npm install

npm install materialize-css

npm install typings install --save --ambient


npm start

