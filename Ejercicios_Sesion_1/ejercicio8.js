const readline = require('readline');

const read = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

read.question('Ingrese una palabra: ', (palabra) => {
    const palabraInvertida = palabra.split('').reverse().join('');
    if(palabra === palabraInvertida){
        console.log(`${palabra} es un palindromo`);
    }else{
        console.log(`${palabra} no es un palindromo`);
    }
    read.close();
});