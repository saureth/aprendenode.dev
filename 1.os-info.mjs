import { platform, release, arch, cpus, freemem, totalmem } from 'node:os';

console.log('Información del sistema operativo');
console.log('---------------------------------');
console.log('Nombre: ', platform());
console.log('Versión: ', release());
console.log('Arquitectura: ', arch());
console.log('CPUs', cpus());
console.log('Memoria disponible: ', freemem() / 1024/ 1024);
console.log('Memoria total: ', totalmem() / 1024 / 1024);
