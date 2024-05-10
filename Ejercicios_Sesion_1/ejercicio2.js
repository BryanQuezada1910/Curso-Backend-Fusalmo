const readline = require('readline');

const read = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

read.question('Ingrese una cadena de texto: ', (texto) => {
    console.log(`Tu cadena contiene ${texto.length} caracteres.`);
    read.close();
});
