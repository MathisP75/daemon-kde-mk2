import {Buffer} from 'node:buffer';
import {
	Duplex as DuplexStream,
	DuplexOptions as DuplexStreamOption,
} from 'node:stream';

export interface Options extends Readonly<DuplexStreamOption> {
	/**
	The number of bytes to buffer.
	*/
	readonly chunkSize: number;
}

export type StopSymbol = typeof FirstChunkStream.stop;

export type BufferLike = string | Buffer | Uint8Array;

export type TransformFunction = (chunk: Buffer, encoding: string) => Promise<StopSymbol | BufferLike | {buffer: BufferLike; encoding?: string}>;

export default class FirstChunkStream extends DuplexStream {
	/**
	Symbol used to end the stream early.

	@example
	```
	import FirstChunkStream from 'first-chunk-stream';

	new FirstChunkStream({chunkSize: 7}, async (chunk, encoding) => {
		return FirstChunkStream.stop;
	});
	```
	*/
	static readonly stop: unique symbol;

	/**
	Buffer and transform the `n` first bytes of a stream.

	@param options - The options object is passed to the [`Duplex` stream](https://nodejs.org/api/stream.html#stream_class_stream_duplex) constructor allowing you to customize your stream behavior.
	@param transform - Async function that receives the required `options.chunkSize` bytes.

	Note that the buffer can have a smaller length than the required one. In that case, it will be due to the fact that the complete stream contents has a length less than the `options.chunkSize` value. You should check for this yourself if you strictly depend on the length.

	@example
	```
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
	*/
	constructor(
		options: Options,
		transform: TransformFunction
	);
}
