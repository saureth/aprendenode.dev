//fs: FileSystem
import fs from 'node:fs';

const stats = fs.statSync('./fs-utils/hola-mundo.txt');

console.log(
    stats.isFile(),
    stats.isDirectory(),
    stats.isSymbolicLink(),
    stats.size
)