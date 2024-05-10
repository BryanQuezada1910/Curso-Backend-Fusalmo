const readline = require('readline');

const read = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

read.question('Ingrese una frase: ', (frase) => {
    read.question('Ingrese la palabra que desea reemplazar: ', (cambiarPalabra) => {
        read.question('Ingrese la palabra que desea reemplazar: ', (nuevaPalabra) => {
            const fraseModificada = frase.replace(new RegExp(cambiarPalabra, 'gi'), nuevaPalabra);
            console.log('Frase modificada:', fraseModificada);
            read.close();
        });
    });
});