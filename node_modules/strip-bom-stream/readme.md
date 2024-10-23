# strip-bom-stream

> Strip UTF-8 [byte order mark](https://en.wikipedia.org/wiki/Byte_order_mark#UTF-8) (BOM) from a stream

From Wikipedia:

> The Unicode Standard permits the BOM in UTF-8, but does not require nor recommend its use. Byte order has no meaning in UTF-8.

## Install

```
$ npm install strip-bom-stream
```

## Usage

```js
import fs from 'node:fs';
import stripBomStream from 'strip-bom-stream';

fs.createReadStream('unicorn.txt')
	.pipe(stripBomStream())
	.pipe(fs.createWriteStream('unicorn.txt'));
```

It's a [`Transform` stream](https://nodejs.org/api/stream.html#stream_class_stream_transform).

## Related

- [strip-bom](https://github.com/sindresorhus/strip-bom) - String version of this module
- [strip-bom-buf](https://github.com/sindresorhus/strip-bom-buf) - Buffer version of this module
