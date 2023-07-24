//fs: FileSystem
import fs from 'node:fs';
import { promisify } from 'node:util';

const readFilePromise = promisify(fs.readFile);

console.log('reading first file ...');
readFilePromise('./fs-utils/hola-mundo.txt','utf-8').then(text => {
    console.log(text);
});

console.log('Doing something else while waiting for output texts');

console.log('reading second file ...');
readFilePromise('./fs-utils/second-text.txt','utf-8').then(secondText => {
    console.log(secondText);
});