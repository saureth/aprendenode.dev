//fs: FileSystem
import fs from 'node:fs';

const text = fs.readFileSync('./fs-utils/hola-mundo.txt','utf-8');
console.log(text);