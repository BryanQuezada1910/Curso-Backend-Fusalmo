const readline = require("readline");
const read = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

function obtenerTipoVehiculo(categoria) {
  let tipoVehiculo;
  switch (categoria) {
    case "Moto":
      tipoVehiculo = "Motocicleta";
      break;
    case "Auto":
      tipoVehiculo = "Automovil";
      break;
    case "Camion":
      tipoVehiculo = "Super Camion";
      break;
    case "Bicicleta":
      tipoVehiculo = "Super Bicicleta";
      break;
    default:
      tipoVehiculo = "La categoria no existe";
      break;
  }
  return tipoVehiculo;
}

read.question("Digite la categoria del vehiculo: ", (categoria) => {
  const tipoVehiculo = obtenerTipoVehiculo(categoria);
  console.log(`${tipoVehiculo}`);
  read.close();
});
