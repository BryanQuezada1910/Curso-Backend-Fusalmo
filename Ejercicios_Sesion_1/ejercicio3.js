const readline = require('readline');

const read = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

read.question('Ingrese una palabra: ', (palabra) => {
    console.log(palabra.toUpperCase());
    read.close();
});