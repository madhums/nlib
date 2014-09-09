## nli

A command setup node module/library

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

MIT
