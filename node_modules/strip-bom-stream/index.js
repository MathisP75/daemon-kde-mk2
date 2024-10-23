import FirstChunkStream from 'first-chunk-stream';
import stripBomBuffer from 'strip-bom-buf';

export default function stripBomStream() {
	return new FirstChunkStream({chunkSize: 3}, (chunk, _encoding) => stripBomBuffer(chunk));
}
