const readline = require('readline');

const read = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

function evaluar(numero1, numero2, numero3) {
    if (numero1 === numero2 && numero2 === numero3) {
        return "Los tres números son iguales";
    } else if (numero1 === numero2 || numero1 === numero3 || numero2 === numero3) {
        if (numero1 === numero2) {
            return "El numero " + numero1 + " es igual al numero " + numero2;
        } else if (numero1 === numero3) {
            return "El numero " + numero1 + " es igual al numero " + numero3;
        } else {
            return "El numero " + numero2 + " es igual al numero " + numero3;
        }
    } else {
        if (numero1 > numero2 && numero1 > numero3) {
            return "El numero " + numero1 + " es el mayor";
        } else if (numero2 > numero1 && numero2 > numero3) {
            return "El numero " + numero2 + " es el mayor";
        } else {
            return "El numero " + numero3 + " es el mayor";
        }
    }
}

read.question("Ingrese el primer numero: ", (numero1) => {
    read.question("Ingrese el segundo numero: ", (numero2) => {
        read.question("Ingrese el tercer numero: ", (numero3) => {
            console.log(evaluar(parseInt(numero1), parseInt(numero2), parseInt(numero3)));
            read.close();
        });
    });
});
