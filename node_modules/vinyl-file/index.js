import process from 'node:process';
import path from 'node:path';
import fs, {promises as fsPromises} from 'node:fs';
import stripBomBuffer from 'strip-bom-buf';
import stripBomStream from 'strip-bom-stream';
import File from 'vinyl';

export async function vinylFile(path_, options = {}) {
	const {
		cwd = process.cwd(),
		base = cwd,
		buffer = true,
		read = true,
	} = options;

	path_ = path.resolve(cwd, path_);

	let contents;
	if (read) {
		contents = buffer
			? stripBomBuffer(await fsPromises.readFile(path_))
			: fs.createReadStream(path_).pipe(stripBomStream());
	}

	return new File({
		cwd,
		base,
		path: path_,
		stat: await fsPromises.stat(path_),
		contents,
	});
}

export function vinylFileSync(path_, options = {}) {
	const {
		cwd = process.cwd(),
		base = cwd,
		buffer = true,
		read = true,
	} = options;

	path_ = path.resolve(cwd, path_);

	let contents;

	if (read) {
		contents = buffer
			? stripBomBuffer(fs.readFileSync(path_))
			: fs.createReadStream(path_).pipe(stripBomStream());
	}

	return new File({
		cwd,
		base,
		path: path_,
		stat: fs.statSync(path_),
		contents,
	});
}
