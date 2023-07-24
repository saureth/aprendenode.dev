//fs: FileSystem
import fs from 'node:fs';

console.log('reading first file ...');
const firstText = fs.readFileSync('./fs-utils/hola-mundo.txt','utf-8');
console.log(firstText);

console.log('Must wait to finish reading first file to read next one');

console.log('reading second file ...');
const secondText = fs.readFileSync('./fs-utils/second-text.txt','utf-8');
console.log(secondText);