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
    '    "test": "echo \"Error: no test specified\" && exit 1"',
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
  ].join(eol)
};
