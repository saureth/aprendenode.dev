const { readFile } = require('node:fs/promises');

Promise.all([
    readFile('./hola-mundo.txt','utf-8'),
    readFile('./second-text.txt','utf-8')
]).then(([firstText,secondText]) => {
    console.log('first text: ' , firstText);
    console.log('second text: ' , secondText);
});