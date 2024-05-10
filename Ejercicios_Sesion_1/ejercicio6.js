const readline = require('readline');

const read = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

read.question('Ingrese una frase: ', (frase) => {
    const palabras = frase.split(' ');
    console.log(`Numero de palabras: ${palabras.length}`);
    read.close();
});