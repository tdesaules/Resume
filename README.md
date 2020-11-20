# RESUME

## Introduction

Resume webapp integration with vue.js webpack and bulma.io

## Init project and dependencies

Installation process to init the app.

Create root folder

```shell
mkdir resume
cd resume
```

Init npm

```shell
npm init -y
```

Init webpack base

```shell
npm install --save-dev webpack webpack-cli webpack-dev-server html-webpack-plugin clean-webpack-plugin webpack-dev-middleware koa-webpack-dev-middleware webpack-merge terser-webpack-plugin
```

Init Node.js / Koa.js

```shell
npm install --save-dev koa koa-static koa-webpack
npm install --save-dev node-fetch
```

Init Framework HTML / CSS / JavaScript

```shell
npm install --save-dev pug pug-plain-loader
npm install --save-dev vue-loader vue-template-compiler vue vue-router vue-horizontal-list
npm install --save-dev html-loader
npm install --save-dev node-sass sass-loader css-loader style-loader mini-css-extract-plugin
npm install --save-dev babel-loader @babel/core @babel/preset-env
npm install --save-dev file-loader
npm install --save-dev bulma
npm install --save-dev jest @vue/test-utils vue-jest jest-transform-stub babel-jest babel-core@^7.0.0-bridge.0
```

## Init workspace

```shell
git clone https://github.com/tdesaules/resume.git
cd resume
npm install
```

## Build and Test

```shell
npm run build:dev
npm run build:prod
npm run start:watch
npm run start:dev
npm run start:prod
npm run test
```

## CI / CD

### IDE (Visual Studio Code):

security:
- Deepcode: <https://www.deepcode.ai/>
- WhiteSource Bolt: <https://www.whitesourcesoftware.com/free-developer-tools/bolt/>

code quality:
- SonarLint: <https://www.sonarsource.com/products/sonarlint/>

### Github Repository

security:
- WhiteSource Bolt for GitHub: <https://www.whitesourcesoftware.com/free-developer-tools/bolt/>
- Deepcode: <https://www.deepcode.ai/>

code quality:
- Codacy: <https://codacy.com/>
- SonarCloud: <https://sonarcloud.io/>

### Github Actions Pipeline

security:
- Snyk: <https://snyk.io/>

unit tests:
- Jest: <https://jestjs.io/>

code quality:
- SonarQube: <https://www.sonarqube.org/>
- ESLint: <https://eslint.org/>

deploy:
- Vercel: <https://vercel.com/>

### Azure DevOps Pipeline

security:
- Snyk: <https://snyk.io/>

unit tests:
- 

code quality:
- 

deploy:
- Netlify: <https://netlify.com/>

## Contribute

- tdesaules@outlook.com

## Ressource

- <https://github.com/tdesaules/resume> 
- <https://dev.azure.com/tdesaules/resume/>
- <https://webpack.js.org/>
- <https://vuejs.org/>
- <https://bulma.io/>
- <https://eslint.org/>
- <https://jestjs.io/>
