## YNAB Javascript SDK

[![code style: prettier](https://img.shields.io/badge/code_style-prettier-ff69b4.svg?style=flat-square)](https://github.com/prettier/prettier)

TODO: This README was generated from Swagger-codegen, and needs to be edited to be YNAB specific.

Notes about:
Date format (DateWithoutTime)
Millicents format

This generator creates TypeScript/JavaScript client that utilizes [Fetch API](https://fetch.spec.whatwg.org/). The generated Node module can be used in the following environments:

Environment
* Node.js
* Webpack
* Browserify

Language level
* ES5 - you must have a Promises/A+ library installed
* ES6

Module system
* CommonJS
* ES6 module system

It can be used in both TypeScript and JavaScript. In TypeScript, the definition should be automatically resolved via `package.json`. ([Reference](http://www.typescriptlang.org/docs/handbook/typings-for-npm-packages.html))

### Building

To build an compile the typescript sources to javascript use:
```
npm install
npm run build
```

### Publishing

First build the package than run ```npm publish```

### Consuming

navigate to the folder of your consuming project and run one of next commands.

_published:_

```
npm install ynab@1.0.0 --save
```

_unPublished (not recommended):_

```
npm install PATH_TO_GENERATED_PACKAGE --save