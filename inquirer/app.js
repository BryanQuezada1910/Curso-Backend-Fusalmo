import inquirer from "inquirer";

const questions = [
  {
    type: "input",
    name: "name",
    message: "¿Cuál es su nombre?",
  },
  {
    type: "input",
    name: "confirmation",
    message: "¿Está seguro que ese es su nombre? (y/n)",
    validate: function (input) {
      if (input.toLowerCase() === "y" || input.toLowerCase() === "n") {
        return true;
      } else {
        return "Por favor, ingrese 'y' o 'n'";
      }
    },
  },
  {
    type: "list",
    name: "color",
    message: "¿Cuál es su color favorito?",
    choices: ["Rojo", "Azul", "Verde", "Amarillo", "Morado", "Naranja"],
  },
  {
    type: "checkbox",
    name: "hobbies",
    message: "¿Cuáles son sus hobbies?",
    choices: [
      "Leer",
      "Programar",
      "Diseñar",
      "Base de datos",
      "Correr",
      "Nadar",
      "Dormir",
      "Jugar videojuegos",
      "Ir al gimnasio",
    ],
  },
  {
    type: "password",
    name: "password",
    message: "Ingrese su contraseña",
    mask: "*",
  },
];

inquirer.prompt(questions).then((answers) => {
  if (answers["confirmation"].toLowerCase() === "y") {
    console.log("Nombre confirmado");
    console.log(`¡Hola ${answers["name"]}!`);
    console.log(`Tu color favorito es: ${answers["color"]}`);
    console.log(`Tus hobbies son: ${answers["hobbies"].join(", ")}`);
    console.log(`Tu contraseña es: ${answers["password"]}`);
  } else {
    console.log("¡Vuelve a intentarlo de nuevo!");
  }
});
