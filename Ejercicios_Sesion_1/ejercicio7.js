const readline = require('readline');

const read = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

read.question('Ingrese una cadena: ', (cadena) => {
    const cadenaInvertida = cadena.split('').reverse().join('');
    console.log(`Cadena invertida: ${cadenaInvertida}`);
    read.close();
});