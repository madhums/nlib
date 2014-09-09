'use strict';

var os = require('os');
var eol = os.EOL;
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
    '  "bin": {',
    '    "ni": "./bin/ni"',
    '  },',
    '  "author": "{{ AUTHOR }}",',
    '  "license": "MIT",',
    '  "bugs": {',
    '    "url": "https://github.com/{{ REPO }}/issues"',
    '  },',
    '  "homepage": "https://github.com/{{ REPO }}",',
    '  "dependencies": {',
    '',
    '  }',
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
    'The MIT License (MIT)',
    '',
    'Copyright (c) '+ year +' {{ AUTHOR }} <{{ EMAIL }}>',

    'Permission is hereby granted, free of charge, to any person obtaining a copy',
    'of this software and associated documentation files (the "Software"), to deal',
    'in the Software without restriction, including without limitation the rights',
    'to use, copy, modify, merge, publish, distribute, sublicense, and/or sell',
    'copies of the Software, and to permit persons to whom the Software is',
    'furnished to do so, subject to the following conditions:',
    '',
    'The above copyright notice and this permission notice shall be included in all',
    'copies or substantial portions of the Software.',
    '',
    'THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR',
    'IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,',
    'FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE',
    'AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER',
    'LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,',
    'OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE',
    'SOFTWARE.'
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
    '  "maxlen": 100,',
    '  "curly": true,',
    '  "node": true,',
    '  "es5": true,',
    '  "browser": true,',
    '  "globals": {',
    '    "angular": true',
    '  }',
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
