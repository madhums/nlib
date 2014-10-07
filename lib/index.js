'use strict';

/*!
 * Module dependencies.
 */

var eol = require('os').EOL;
var year = (new Date()).getFullYear();

module.exports = {

  /**
   * .gitignore
   */

  '.gitignore': [
    'node_modules'
  ].join(eol),

  /**
   * package.json
   */

  'package.json': [
    '{',
    '  "name": "{{ NAME }}",',
    '  "version": "0.0.0",',
    '  "description": "{{ DESCRIPTION }}",',
    '  "main": "index.js",',
    '  "engines": {',
    '    "node": ">=0.10.x"',
    '  },',
    '  "scripts": {',
    '    "test": "make test"',
    '  },',
    '  "repository": {',
    '    "type": "git",',
    '    "url": "git://github.com/{{ REPO }}.git"',
    '  },',
    '  "keywords": [',
    '',
    '  ],',
    '  "author": "{{ AUTHOR }} <{{ EMAIL }}>",',
    '  "license": "MIT",',
    '  "bugs": {',
    '    "url": "https://github.com/{{ REPO }}/issues"',
    '  },',
    '  "homepage": "https://github.com/{{ REPO }}",',
    '  "dependencies": {',
    '',
    '  },',
    '  "devDependencies": {',
    '',
    '  }',
    '}'
  ].join(eol),

  /**
   * README.md
   */

  'README.md': [
    '## {{ NAME }}',
    '',
    '{{ DESCRIPTION }}',
    '',
    '## License',
    '',
    'MIT',
    ''
  ].join(eol),

  /**
   * CHANGELOG.md
   */

  'CHANGELOG.md': [
    '## Changelog',
    ''
  ].join(eol),

  /**
   * lib/index.js
   */

  'lib/index.js': [
    '',
    '/*!',
    ' * {{ NAME }}',
    ' * Copyright(c) '+ year +' {{ AUTHOR }} <{{ EMAIL }}>',
    ' * MIT Licensed',
    ' */',
    '',
    '/*!',
    ' * Module dependencies.',
    ' */',
    ''
  ].join(eol),

  /**
   * .jshintrc
   */

  '.jshintrc': [
    '{',
    '  "bitwise": false,',
    '  "immed": true,',
    '  "newcap": true,',
    '  "noarg": true,',
    '  "noempty": true,',
    '  "nonew": true,',
    '  "trailing": true,',
    '  "boss": true,',
    '  "eqnull": true,',
    '  "expr": true,',
    '  "globalstrict": true,',
    '  "laxbreak": true,',
    '  "loopfunc": true,',
    '  "sub": true,',
    '  "undef": true,',
    '  "eqeqeq": true,',
    '  "indent": 2,',
    '  "freeze": true,',
    '  "latedef": true,',
    '  "quotmark": "single",',
    '  "unused": true,',
    '  "maxparams": 7,',
    '  "maxdepth": 3,',
    '  "maxstatements": 20,',
    '  "maxlen": 80,',
    '  "curly": false,',
    '  "node": true,',
    '  "es5": true,',
    '  "esnext": true,',
    '  "globals": {}',
    '}'
  ].join(eol),

  /**
   * .jshintignore
   */

  '.jshintignore': [
    'node_modules',
    'public/components',
    'public/dist'
  ].join(eol),

  /**
   * index.js
   */

  'index.js': [
    'module.exports = require(\'./lib/\');'
  ].join(eol),

  /**
   * test/index.js
   */

  'test/index.js': [
    '',
    '/*!',
    ' * Module dependencies.',
    ' */',
    ''
  ].join(eol)
};
