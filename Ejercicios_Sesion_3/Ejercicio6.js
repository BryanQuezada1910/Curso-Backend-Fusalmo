const readline = require("readline");
const read = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

function obtenerNombreMes(numMes) {
  let nombreMes;
  switch (parseInt(numMes)) {
    case 1:
      nombreMes = "Enero";
      break;
    case 2:
      nombreMes = "Febrero";
      break;
    case 3:
      nombreMes = "Marzo";
      break;
    case 4:
      nombreMes = "Abril";
      break;
    case 5:
      nombreMes = "Mayo";
      break;
    case 6:
      nombreMes = "Junio";
      break;
    case 7:
      nombreMes = "Julio";
      break;
    case 8:
      nombreMes = "Agosto";
      break;
    case 9:
      nombreMes = "Septiembre";
      break;
    case 10:
      nombreMes = "Octubre";
      break;
    case 11:
      nombreMes = "Noviembre";
      break;
    case 12:
      nombreMes = "Diciembre";
      break;
    default:
      nombreMes = "El numero del mes no existe";
      break;
  }
  return nombreMes;
}

read.question("Digite el numero de el mes a conocer: ", (numMes) => {
  const nombreMes = obtenerNombreMes(numMes);
  if (numMes <= 0 || numMes >= 13) {
    console.log(`${nombreMes}`);
  } else {
    console.log(`El mes ${numMes} es ${nombreMes}`);
  }
  read.close();
});
