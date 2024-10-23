import {Buffer} from 'node:buffer';
import isUtf8 from 'is-utf8';

export default function strimBomBuffer(buffer) {
	if (!Buffer.isBuffer(buffer)) {
		throw new TypeError(`Expected a \`Buffer\`, got \`${typeof buffer}\``);
	}

	if (buffer[0] === 0xEF && buffer[1] === 0xBB && buffer[2] === 0xBF && isUtf8(buffer)) {
		return buffer.slice(3);
	}

	return buffer;
}
