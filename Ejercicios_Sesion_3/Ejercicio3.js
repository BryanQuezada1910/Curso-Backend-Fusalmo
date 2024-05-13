const readline = require('readline');

const read = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

function calcularFactorial(numero) {
    let resultado = 1;
    for (let i = 1; i <= parseInt(numero); i++) {
        resultado *= i;
    }
    console.log("El factorial de " + numero + " es: " + resultado);
}

read.question("Digite el numero a realizar el factorial: ", (numero) => {
    calcularFactorial(numero);
    read.close();
});
