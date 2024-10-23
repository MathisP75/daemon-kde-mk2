# first-chunk-stream

> Buffer and transform the n first bytes of a stream

## Install

```
$ npm install first-chunk-stream
```

## Usage

```js
import fs from 'node:fs';
import getStream from 'get-stream';
import FirstChunkStream from 'first-chunk-stream';

// unicorn.txt => unicorn rainbow
const stream = fs.createReadStream('unicorn.txt')
	.pipe(new FirstChunkStream({chunkSize: 7}, async (chunk, encoding) => {
		return chunk.toString(encoding).toUpperCase();
	}));

const data = await getStream(stream);

if (data.length < 7) {
	throw new Error('Couldn\'t get the minimum required first chunk length');
}

console.log(data);
//=> 'UNICORN rainbow'
```

## API

### FirstChunkStream(options, transform)

`FirstChunkStream` constructor.

#### transform(chunk, encoding)

Type: `Function`

Async function that receives the required `options.chunkSize` bytes.

Expected to return an buffer-like object or `string` or object of form {buffer: `Buffer`, encoding: `string`} to send to stream or `firstChunkStream.stop` to end stream right away.

An error thrown from this function will be emitted as stream errors.

Note that the buffer can have a smaller length than the required one. In that case, it will be due to the fact that the complete stream contents has a length less than the `options.chunkSize` value. You should check for this yourself if you strictly depend on the length.

```js
import FirstChunkStream from 'first-chunk-stream';

new FirstChunkStream({chunkSize: 7}, async (chunk, encoding) => {
	return chunk.toString(encoding).toUpperCase(); // Send string to stream
});

new FirstChunkStream({chunkSize: 7}, async (chunk, encoding) => {
	return chunk; // Send buffer to stream
});

new FirstChunkStream({chunkSize: 7}, async (chunk, encoding) => {
	return {
		buffer: chunk,
		encoding: encoding,
	}; // Send buffer with encoding to stream
});

new FirstChunkStream({chunkSize: 7}, async (chunk, encoding) => {
	return FirstChunkStream.stop; // End the stream early
});

new FirstChunkStream({chunkSize: 7}, async (chunk, encoding) => {
	throw new Error('Unconditional error'); // Emit stream error
});
```

#### options

Type: `object`

The options object is passed to the [`Duplex` stream](https://nodejs.org/api/stream.html#stream_class_stream_duplex) constructor allowing you to customize your stream behavior. In addition, you can specify the following option:

###### chunkSize

Type: `number`

The number of bytes to buffer.
