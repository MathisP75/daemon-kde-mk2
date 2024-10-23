import FirstChunkStream from 'first-chunk-stream';

export type StripBomStream = FirstChunkStream;

/**
Strip UTF-8 [byte order mark](https://en.wikipedia.org/wiki/Byte_order_mark#UTF-8) (BOM) from a stream.

@example
```
import fs from 'node:fs';
import stripBomStream from 'strip-bom-stream';

fs.createReadStream('unicorn.txt')
	.pipe(stripBomStream())
	.pipe(fs.createWriteStream('unicorn.txt'));
```
*/
export default function stripBomStream(): StripBomStream;
