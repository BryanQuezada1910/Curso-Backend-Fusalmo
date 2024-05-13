const readline = require('readline');
const read = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

function mezclarColores(color1, color2) {
    if (color1 === "azul" && color2 === "amarillo") {
        console.log("La mezcla genera el color verde");
    } else if (color1 === "azul" && color2 === "rojo") {
        console.log("La mezcla genera el color morado");
    } else if (color1 === "rojo" && color2 === "amarillo") {
        console.log("La mezcla genera el color naranja");
    } else {
        console.log("La mezcla no se encuentra disponible");
    }
}

read.question("Ingrese el primer color: ", (color1) => {
    read.question("Ingrese el segundo color: ", (color2) => {
        mezclarColores(color1, color2);
        read.close();
    });
});
