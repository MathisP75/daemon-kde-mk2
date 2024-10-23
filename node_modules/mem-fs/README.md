# mem-fs

Simple in-memory vinyl file store.

## Usage

### Loading a file

You access a file using `store#get()` method. If the file is in memory, it will be used. Otherwise, we'll load the file from the file-system.

```js
import { create } from 'mem-fs';

const store = create();
store.get('/test/file.txt');
```

When trying to load a file we cannot read from disk, an empty Vinyl file will be returned. The `contents` of this file will be set to `null`.

Trying to get a directory or any invalid files will also return an empty Vinyl file pointer.

### Adding/updating a file

You update file references by using `store#add()` method. This method take a `vinyl` file object as parameter.

```js
import File from 'vinyl';
import { create } from 'mem-fs';

const coffeeFile = new File({
  cwd: '/',
  base: '/test/',
  path: '/test/file.coffee',
  contents: new Buffer('test = 123'),
});

const store = create();
store.add(coffeeFile);
```

### Iterating over the file system

Using `store#each(cb(file, index))`, you can iterate over every file stored in the file system.

### Get all files

Using `store#all()`, you can get every file stored in the file system.

### Check existence in the file system

Using `store#existsInMemory()`, you can check if the file already exists in the file system without loading it from disk.

### Stream every file stored in the file system

Using `store#stream()`, you can create a stream with every file stored in the file system.

### Pass stored files through a pipeline

`store#pipeline()` generates a new map with yielded files in transforms.
If no transform is passed, files references are updated.
