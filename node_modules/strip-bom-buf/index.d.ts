import {Buffer} from 'node:buffer';

/**
Strip UTF-8 [byte order mark](http://en.wikipedia.org/wiki/Byte_order_mark#UTF-8) (BOM) from a buffer.

@example
```
import fs from 'node:fs';
import stripBomBuffer from 'strip-bom-buf';

stripBomBuffer(fs.readFileSync('unicorn.txt'));
//=> 'unicorn'
```
*/
export default function stripBomBuffer(buffer: Buffer): Buffer;
