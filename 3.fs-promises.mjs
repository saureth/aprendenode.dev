//fs: FileSystem
import fsp from 'node:fs/promises';

console.log('reading first file ...');
fsp.readFile('./fs-utils/hola-mundo.txt','utf-8').then(text => {
    console.log(text);
});

console.log('Doing something else while waiting for output texts');

console.log('reading second file ...');
fsp.readFile('./fs-utils/second-text.txt','utf-8').then(text => {
    console.log(text);
});