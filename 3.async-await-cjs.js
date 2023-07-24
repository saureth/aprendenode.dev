const { readFile } = require('node:fs/promises');

//This is a sequential async function, executes in order but asyncronously
( async () => {
    console.log('reading first file ...');
    const firstText = await readFile('./fs-utils/hola-mundo.txt','utf-8');
    console.log(firstText);
    
    console.log('Doing something else while waiting for output texts');
    
    console.log('reading second file ...');
    const secondText = await readFile('./fs-utils/second-text.txt','utf-8');
    console.log(secondText);
})();//IIFE: Immediatly Invoked Function Expression
