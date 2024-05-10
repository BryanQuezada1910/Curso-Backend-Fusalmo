const readline = require('readline');

const read = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

read.question('Introduce tu nombre: ', (nombre) => {
    read.question('Introduce tu apellido: ', (apellido) => {
        console.log(`Hola ${nombre} ${apellido}`);
        read.close();
    });
});
//