## nlib

CLI helper to set up new node library

## Installation

```sh
$ npm install nlib -g
```

## Usage

```sh
$ echo '{"author":"<AUTHOR>","email":"<EMAIL>", "ghusername": "<GH_USERNAME>"}' > .nlibrc
# If you are creating a lot of node modules, you can store the meta info in `~/.nlibrc` file

$ nlib imager -d "Image processing and uploading"
# This will create a folder `imager` in the current dir and adds
# all boilerplate code in there.
```


For help

```sh
$ nlib -h
```

## License

MIT
