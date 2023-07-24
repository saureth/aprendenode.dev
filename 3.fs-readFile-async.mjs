//fs: FileSystem
import fs from 'node:fs';

console.log('reading first file ...');
fs.readFile('./fs-utils/hola-mundo.txt','utf-8', (err,text) => {
    console.log(text);
});

console.log('Doing something else while waiting for output texts');

console.log('reading second file ...');
fs.readFile('./fs-utils/second-text.txt','utf-8', (err,secondText) => {
    console.log(secondText);
});