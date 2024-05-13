const readline = require('readline');

const read = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

function evaluar(numero) {
    if(parseFloat(numero) % 2 === 0){
        console.log("El numero es par");
    }else{
        console.log("El numero no es par");
    }
}

read.question("Digite el numero a evaluar: ", (numero) => {
    evaluar(numero);
    read.close();
});