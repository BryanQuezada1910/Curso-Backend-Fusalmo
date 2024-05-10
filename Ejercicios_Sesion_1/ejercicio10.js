const readline = require('readline');

const read = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

read.question('Ingrese una frase: ', (frase) => {
    const palabras = frase.split(' ');
    const fraseCapitalizada = palabras.map(word => word.charAt(0).toUpperCase() + word.slice(1).toLowerCase()).join(' ');
    console.log(`Frase capitalizada: ${fraseCapitalizada}`);
    read.close();
});