const readline = require("readline");

const read = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

function saludar(callback) {
  read.question("Por favor ingrese su nombre: ", (nombre) => {
    const saludo = `¡Hola, ${nombre}!`;
    callback(saludo);
    read.close();
  });
}

function mostrarSaludo(saludo) {
  console.log(saludo);
}

saludar(mostrarSaludo);
