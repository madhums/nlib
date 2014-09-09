## nli

A command to setup a node module/library

## Requirements

* node 0.11.x with `--harmony` flag
* create `nodeh` as an alias to `node --harmony`

```sh
$ cat ~/bin/nodeh
#!/bin/bash
node --harmony "$@"
```

## Installation

```sh
$ npm install nli -g
```

## Usage

```sh
$ nli info -A 'YOUR_NAME' -E 'YOUR_EMAIL'
```

This will write a file to your home directory `~/.nlinfo.json` containing
the above information you provided.

```sh
$ nli setup madhums/node-imager -d 'Image processing and uploading'
```

This will create `madhums/node-imager` dir and sets up node module within it.

For help

```sh
$ nli -h
```

## License

The MIT License (MIT)

Copyright (c) 2014 Madhusudhan Srinivasa <me@madhums.me>

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.
