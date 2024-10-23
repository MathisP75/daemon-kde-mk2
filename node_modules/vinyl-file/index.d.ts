import {type BufferFile, type NullFile, type StreamFile} from 'vinyl';

export type Options = {
	/**
	Override the `base` of the Vinyl file.

	@default process.cwd()
	*/
	base?: string;

	/**
	Override the `cwd` (current working directory) of the Vinyl file.

	@default process.cwd()
	*/
	cwd?: string;

	/**
	Setting this to `false` will return `file.contents` as a stream. This is useful when working with large files.

	__Note:__ Plugins might not implement support for streams.

	@default true
	*/
	buffer?: boolean;

	/**
	Setting this to `false` will return `file.contents` as `null` and not read the file at all.

	@default true
	*/
	read?: boolean;
};

/**
Create a Vinyl file asynchronously and return it.

@param path - The path to the file to create a Vinyl file of.

@example
```
import {vinylFile} from 'vinyl-file';

const file = await vinylFile('index.js');

console.log(file.path);
//=> '/Users/sindresorhus/dev/vinyl-file/index.js'

console.log(file.cwd);
//=> '/Users/sindresorhus/dev/vinyl-file'
```
*/
export function vinylFile(path: string, options: Options & {read: false}): Promise<NullFile>;
export function vinylFile(path: string, options: Options & {buffer: false}): Promise<StreamFile>;
export function vinylFile(path: string, options?: Options): Promise<BufferFile>;

/**
Create a Vinyl file synchronously and return it.

@param path - The path to the file to create a Vinyl file of.

@example
```
import {vinylFileSync} from 'vinyl-file';

const file = vinylFileSync('index.js');

console.log(file.path);
//=> '/Users/sindresorhus/dev/vinyl-file/index.js'

console.log(file.cwd);
//=> '/Users/sindresorhus/dev/vinyl-file'
```
*/
export function vinylFileSync(path: string, options: Options & {read: false}): NullFile;
export function vinylFileSync(path: string, options: Options & {buffer: false}): StreamFile;
export function vinylFileSync(path: string, options?: Options): BufferFile;
