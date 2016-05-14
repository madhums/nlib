#!/usr/bin/env node

'use strict';

/*
 * Module dependencies.
 */

const fs = require('co-fs');
const mkdirp = require('co-mkdirp');
const meow = require('meow');
const co = require('co');
const contents = require('../lib');

const infoFilePath = process.env.HOME + '/.nlibrc';
const cwd = process.cwd();
const write = fs.writeFile;
const read = fs.readFile;

let repo = '';
let info = {};

const usage = `
    Usage
      $ nlib <repo>

    Options
      -d, --description  Add description
      -h, --help  Show help

    Examples
      $ nlib imager -d Manipulate images
      $ nlib -h

    If you have the file ~/.nlibinfo then it will fetch the author info
`;

const cli = meow(usage, {
  alias: {
    d: 'description',
    h: 'help'
  }
});

co(setup);

/**
 * Setup
 */

function *setup () {
  repo = cli.input[0];

  const dir = cwd + '/' + repo;
  const files = [
    '.travis.yml',
    '.codeclimate.yml',
    '.gitignore',
    '.eslintrc',
    'package.json',
    'README.md',
    'History.md',
    'index.js',
    'lib/index.js',
    'test/index.js'
  ];

  yield mkdirp(dir);

  try {
    info = JSON.parse(yield read(infoFilePath, 'utf-8'));
  } catch (err) {
    console.log(err);
    info = {
      author: '<author>',
      email: 'email',
      ghusername: '<username>'
    };
  }

  process.chdir(dir);
  console.log('');

  for (let i = 0; i < files.length; i++) {
    yield create(files[i]);
  }

  console.log('');
  process.stdin.pause();
}

/**
 * create
 *
 * @param {String} name
 * @api private
 */

function *create (name) {
  const text = 'created';
  let dir = cwd + '/' + repo + '/' + name.split('/')[0];

  // If it is a file, simply write it
  if (name.includes('/')) {
    yield mkdirp(dir);
    dir = dir + '/' + name.split('/')[1];
  }

  yield write(dir, yield content(name));
  console.log(`\t ${text}: ${repo}/${name}`);
}

/**
 * content
 *
 * Get content of the files
 *
 * @param {String} content
 * @return {String}
 * @api private
 */

function *content (name) {
  info.name = repo;
  info.description = cli.flags.description;
  return contents(info)[name];
}
