import {Buffer} from 'node:buffer';
import {Duplex as DuplexStream} from 'node:stream';

const stop = Symbol('FirstChunkStream.stop');

export default class FirstChunkStream extends DuplexStream {
	constructor(options, callback) {
		const state = {
			isSent: false,
			chunks: [],
			size: 0,
		};

		if (typeof options !== 'object' || options === null) {
			throw new TypeError('FirstChunkStream constructor requires `options` to be an object.');
		}

		if (typeof callback !== 'function') {
			throw new TypeError('FirstChunkStream constructor requires a callback as its second argument.');
		}

		if (typeof options.chunkSize !== 'number') {
			throw new TypeError('FirstChunkStream constructor requires `options.chunkSize` to be a number.');
		}

		if (options.objectMode) {
			throw new Error('FirstChunkStream doesn\'t support `objectMode` yet.');
		}

		super(options);

		// Initialize the internal state
		state.manager = createReadStreamBackpressureManager(this);

		const processCallback = (buffer, encoding, done) => {
			state.isSent = true;

			(async () => {
				let result;
				try {
					result = await callback(buffer, encoding);
				} catch (error) {
					setImmediate(() => {
						this.emit('error', error);
						done();
					});
					return;
				}

				if (result === stop) {
					state.manager.programPush(null, undefined, done);
				} else if (Buffer.isBuffer(result) || (result instanceof Uint8Array) || (typeof result === 'string')) {
					state.manager.programPush(result, undefined, done);
				} else {
					state.manager.programPush(result.buffer, result.encoding, done);
				}
			})();
		};

		// Writes management
		this._write = (chunk, encoding, done) => {
			state.encoding = encoding;
			if (state.isSent) {
				state.manager.programPush(chunk, state.encoding, done);
			} else if (chunk.length < options.chunkSize - state.size) {
				state.chunks.push(chunk);
				state.size += chunk.length;
				done();
			} else {
				state.chunks.push(chunk.slice(0, options.chunkSize - state.size));
				chunk = chunk.slice(options.chunkSize - state.size);
				state.size += state.chunks[state.chunks.length - 1].length;

				processCallback(Buffer.concat(state.chunks, state.size), state.encoding, () => {
					if (chunk.length === 0) {
						done();
						return;
					}

					state.manager.programPush(chunk, state.encoding, done);
				});
			}
		};

		this.on('finish', () => {
			if (!state.isSent) {
				return processCallback(Buffer.concat(state.chunks, state.size), state.encoding, () => {
					state.manager.programPush(null, state.encoding);
				});
			}

			state.manager.programPush(null, state.encoding);
		});
	}
}

// Utils to manage readable stream backpressure
function createReadStreamBackpressureManager(readableStream) {
	const manager = {
		waitPush: true,
		programmedPushs: [],
		programPush(chunk, encoding, isDone = () => {}) {
			// Store the current write
			manager.programmedPushs.push([chunk, encoding, isDone]);
			// Need to be async to avoid nested push attempts
			// Programm a push attempt
			setImmediate(manager.attemptPush);
			// Let's say we're ready for a read
			readableStream.emit('readable');
			readableStream.emit('drain');
		},
		attemptPush() {
			let nextPush;

			if (manager.waitPush) {
				if (manager.programmedPushs.length > 0) {
					nextPush = manager.programmedPushs.shift();
					manager.waitPush = readableStream.push(nextPush[0], nextPush[1]);
					(nextPush[2])();
				}
			} else {
				setImmediate(() => {
					// Need to be async to avoid nested push attempts
					readableStream.emit('readable');
				});
			}
		},
	};

	function streamFilterRestoreRead() {
		manager.waitPush = true;
		// Need to be async to avoid nested push attempts
		setImmediate(manager.attemptPush);
	}

	// Patch the readable stream to manage reads
	readableStream._read = streamFilterRestoreRead;

	return manager;
}

FirstChunkStream.stop = stop;
