# vinyl-file

> Create a [Vinyl file](https://github.com/gulpjs/vinyl) from an actual file

## Install

```sh
npm install vinyl-file
```

## Usage

```js
import {vinylFile} from 'vinyl-file';

const file = await vinylFile('index.js');

console.log(file.path);
//=> '/Users/sindresorhus/dev/vinyl-file/index.js'

console.log(file.cwd);
//=> '/Users/sindresorhus/dev/vinyl-file'
```

## API

### vinylFile(path, options?)

Create a Vinyl file asynchronously and return it.

### vinylFileSync(path, options?)

Create a Vinyl file synchronously and return it.

#### options

Type: `object`

##### base

Type: `string`\
Default: `process.cwd()`

Override the `base` of the Vinyl file.

##### cwd

Type: `string`\
Default: `process.cwd()`

Override the `cwd` (current working directory) of the Vinyl file.

##### buffer

Type: `boolean`\
Default: `true`

Setting this to `false` will return `file.contents` as a stream. This is useful when working with large files.

**Note:** Plugins might not implement support for streams.

##### read

Type: `boolean`\
Default: `true`

Setting this to `false` will return `file.contents` as `null` and not read the file at all.

## Related

- [vinyl-read](https://github.com/SamVerschueren/vinyl-read) - Create vinyl files from glob patterns
