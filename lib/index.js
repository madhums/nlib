'use strict';

/*
 * Module dependencies.
 */

var year = (new Date()).getFullYear();

module.exports = function (info) {

  return {

    /**
     * .gitignore
     */

    '.gitignore': `node_modules
.env
npm-debug.log
`,

    /**
     * package.json
     */

    'package.json': `{
  "name": "${info.name}",
  "version": "1.0.0",
  "description": "${info.description}",
  "main": "index.js",
  "engines": {
    "node": ">=6.x"
  },
  "scripts": {
    "test": "node test/*.js"
  },
  "repository": {
    "type": "git",
    "url": "git://github.com/${info.ghusername}/${info.name}.git"
  },
  "keywords": [

  ],
  "author": "${info.author} <${info.email}>",
  "license": "MIT",
  "bugs": {
    "url": "https://github.com/${info.ghusername}/${info.name}/issues"
  },
  "homepage": "https://github.com/${info.ghusername}/${info.name}",
  "dependencies": {

  },
  "devDependencies": {
    "tape": "latest"
  }
}`,

    /**
     * README.md
     */

    'README.md': `
[![Build Status](https://img.shields.io/travis/${info.ghusername}/${info.name}.svg?style=flat)](https://travis-ci.org/${info.ghusername}/${info.name})
[![Dependencies](https://img.shields.io/david/${info.ghusername}/${info.name}.svg?style=flat)](https://david-dm.org/${info.ghusername}/${info.name})
[![Code climate](http://img.shields.io/codeclimate/github/${info.ghusername}/${info.name}.svg?style=flat)](https://codeclimate.com/github/${info.ghusername}/${info.name})
[![Join Gitter Chat](https://img.shields.io/badge/gitter-join%20chat%20%E2%86%92-brightgreen.svg?style=flat)](https://gitter.im/${info.ghusername}/${info.name}?utm_source=badge&utm_medium=badge&utm_campaign=pr-badge&utm_content=badge)
[![Gittip](https://img.shields.io/gratipay/${info.ghusername}.svg?style=flat)](https://www.gratipay.com/${info.ghusername}/)

## ${info.name}

${info.description}

## License

MIT
`,

    /**
     * History.md
     */

    'History.md': `## Changelog
`,

    /**
     * lib/index.js
     */

    'lib/index.js': `
'use strict';

/*
 * ${info.name}
 * Copyright(c) ${year} ${info.author} <${info.email}>
 * MIT Licensed
 */

/*!
 * Module dependencies.
 */
`,

    /**
     * .eslintrc
     */

    '.eslintrc': `{
  "extends": "eslint:recommended",
  "env": {
    "es6": true,
    "node": true
  },
  "parser": "babel-eslint",
  "rules": {
    "object-curly-spacing": [2, "always"],
    "strict": 0,
    "quotes": [2, "single", "avoid-escape"],
    "semi": [2, "always"],
    "space-before-function-paren": [2, "always"],
    "keyword-spacing": [2, {"before": true, "after": true}],
    "space-infix-ops": 2,
    "spaced-comment": [2, "always"],
    "arrow-spacing": 2,
    "no-console": 0
  },
  "globals": {
  }
}
`,

    /**
     * index.js
     */

    'index.js': `'use strict';

module.exports = require('./lib');
`,

    /**
     * test/index.js
     */

    'test/index.js': `'use strict';

/*!
 * Module dependencies.
 */

const test = require('tape');

`,

    /**
     * .travis.yml
     */

    '.travis.yml': `language: node_js
node_js:
  - "6.0.0"
  - "6.1.0"
`,

    /**
     * .codeclimate.yml
     */

    '.codeclimate.yml': `engines:
  eslint:
    enabled: true
ratings:
   paths:
   - lib/**
exclude_paths:
- node_modules/**
- test/**
`

  };

};
