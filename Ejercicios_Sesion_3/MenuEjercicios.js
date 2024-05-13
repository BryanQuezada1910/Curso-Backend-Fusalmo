function menu() {
  const readline = require("readline");

  const read = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
  });

  read.question(
    "Digite el numero del ejercicio que desea ejecutar:\n1: Determinar si el numero es positivo o negativo\n2: Calcular el mayor de los 3 numeros\n3: Factorial de un numero\n4: Determinar si es par o impar\n5: Mezcla de colores primarios\n6: Nombre del mes\n7: Determinar tipo de vehiculo\n8: Salir del menu\n",
    (opcion) => {
      switch (parseInt(opcion)) {
        case 1:
          read.question("Ingrese un numero: ", (numero) => {
            evaluar1(parseInt(numero));
            read.close();
            menu(); // Volver a mostrar el menú
          });
          break;

        case 2:
          read.question("Ingrese el primer numero: ", (numero1) => {
            read.question("Ingrese el segundo numero: ", (numero2) => {
              read.question("Ingrese el tercer numero: ", (numero3) => {
                console.log(
                  evaluar2(
                    parseInt(numero1),
                    parseInt(numero2),
                    parseInt(numero3)
                  ) + "\n"
                );
                read.close();
                menu(); // Volver a mostrar el menú
              });
            });
          });
          break;

        case 3:
          read.question(
            "Digite el numero a realizar el factorial: ",
            (numero) => {
              factorial(numero);
              read.close();
              menu();
            }
          );
          break;

        case 4:
          read.question("Digite el numero a evaluar: ", (numero) => {
            parImpar(numero);
            read.close();
            menu();
          });
          break;

        case 5:
          read.question("Ingrese el primer color: ", (color1) => {
            read.question("Ingrese el segundo color: ", (color2) => {
              mezclaColores(color1, color2);
              read.close();
              menu();
            });
          });
          break;

        case 6:
          read.question("Digite el numero de el mes a conocer: ", (numMes) => {
            const nombreMes = obtenerNombreMes(numMes);
            if (numMes <= 0 || numMes >= 13) {
              console.log(`${nombreMes} \n`);
            } else {
              console.log(`El mes ${numMes} es ${nombreMes} \n`);
            }
            read.close();
            menu();
          });
          break;

        case 7:
          read.question("Digite la categoria del vehiculo: ", (categoria) => {
            const tipoVehiculo = obtenerTipoVehiculo(categoria);
            console.log(`${tipoVehiculo}`);
            read.close();
            menu();
          });
          break;

        case 8:
          console.log("Saliendo del menu");
          read.close();
          break;

        default:
          console.log("Por favor seleccione una opcion valida\n");
          read.close();
          menu();
          break;
      }
    }
  );
}

function evaluar1(numero) {
  if (numero >= 1) {
    console.log(numero + " es positivo\n");
  } else if (numero <= -1) {
    console.log(numero + " es negativo\n");
  } else {
    console.log("El numero es 0\n");
  }
}

function evaluar2(numero1, numero2, numero3) {
  if (numero1 === numero2 && numero2 === numero3) {
    return "Los tres números son iguales";
  } else if (
    numero1 === numero2 ||
    numero1 === numero3 ||
    numero2 === numero3
  ) {
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

function factorial(numero) {
  let resultado = 1;
  for (let i = 1; i <= parseInt(numero); i++) {
    resultado *= i;
  }
  console.log("El factorial de " + numero + " es: " + resultado + "\n");
}

function parImpar(numero) {
  if (parseFloat(numero) % 2 === 0) {
    console.log("El numero es par\n");
  } else {
    console.log("El numero es impar\n");
  }
}

function mezclaColores(color1, color2) {
  if (color1 === "azul" && color2 === "amarillo") {
    console.log("La mezcla genera el color verde\m");
  } else if (color1 === "azul" && color2 === "rojo") {
    console.log("La mezcla genera el color morado\n");
  } else if (color1 === "rojo" && color2 === "amarillo") {
    console.log("La mezcla genera el color naranja\n");
  } else {
    console.log("La mezcla no se encuentra disponible\n");
  }
}

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

function obtenerTipoVehiculo(categoria) {
  let tipoVehiculo;
  switch (categoria) {
    case "Moto":
      tipoVehiculo = "Motocicleta\n";
      break;
    case "Auto":
      tipoVehiculo = "Automovil\n";
      break;
    case "Camion":
      tipoVehiculo = "Super Camion\n";
      break;
    case "Bicicleta":
      tipoVehiculo = "Super Bicicleta\n";
      break;
    default:
      tipoVehiculo = "La categoria no existe\n";
      break;
  }
  return tipoVehiculo;
}

menu();
