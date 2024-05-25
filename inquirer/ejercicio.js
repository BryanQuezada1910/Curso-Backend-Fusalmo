import inquirer from "inquirer";

const preguntas = [
  {
    type: "input",
    name: "nombre",
    message: "¿Cuál es tu nombre?",
  },
  {
    type: "input",
    name: "edad",
    message: "¿Cuál es tu edad?",
    validate: function (entrada) {
      const edad = parseInt(entrada);
      if (isNaN(edad) || edad < 0) {
        return "Por favor, ingrese una edad válida";
      } else {
        return true;
      }
    },
  },
];

inquirer
  .prompt(preguntas)
  .then((respuestas) => {
    if (parseInt(respuestas.edad) >= 18) {
      console.log(
        `Hola ${respuestas.nombre}, procede a registrarte para iniciar sesión.`
      );

      inquirer
        .prompt([
          {
            type: "input",
            name: "correo",
            message: "Ingresa tu correo electrónico:",
            validate: function (entrada) {
              const regexCorreo =
                /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]+$/;
              if (regexCorreo.test(entrada)) {
                return true;
              } else {
                return "Por favor, ingrese un correo electrónico válido";
              }
            },
          },
          {
            type: "password",
            name: "contraseña",
            message: "Ingresa tu contraseña:",
            mask: "*",
          },
        ])
        .then((credenciales) => {
          console.log("¡Cuenta creada con éxito!\nIngrese sus credenciales para iniciar sesión:");

          const intentarIniciarSesion = () => {
            inquirer
              .prompt([
                {
                  type: "input",
                  name: "loginCorreo",
                  message: "Correo electrónico:",
                  validate: function (entrada) {
                    const regexCorreo =
                      /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]+$/;
                    if (regexCorreo.test(entrada)) {
                      return true;
                    } else {
                      return "Por favor, ingrese un correo electrónico válido";
                    }
                  },
                },
                {
                  type: "password",
                  name: "loginContraseña",
                  message: "Contraseña:",
                  mask: "*",
                },
              ])
              .then((respuestasLogin) => {
                if (respuestasLogin.loginCorreo === credenciales.correo && respuestasLogin.loginContraseña === credenciales.contraseña) {
                  console.log("¡Inicio de sesión exitoso!");
                } else {
                  console.log("Correo o contraseña incorrectos. Inténtalo de nuevo.");
                  intentarIniciarSesion();
                }
              })
              .catch((error) => {
                console.error("Error durante el inicio de sesión", error);
              });
          };

          intentarIniciarSesion();
        })
        .catch((error) => {
          console.error("Error al ingresar las credenciales", error);
        });
    } else {
      console.log(
        `Hola ${respuestas.nombre}, no puedes registrarte porque eres menor de edad.`
      );
    }
  })
  .catch((error) => {
    console.error("Error al ingresar los datos", error);
  });





// const questions = [
//     {
//         type: "input",
//         name: "correo",
//         message: "¿Cuál es tu correo electrónico?",
//         validate: function (input) {
//             const email = input.match(/^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]+$/);
//             if (email) {
//                 return true;
//             } else {
//                 return "Por favor, ingrese un correo electrónico válido";
//             }
//         },
//     },
// ]

// inquirer.prompt(questions).then((answers) => {
//     console.log(`Tu correo electrónico es: ${answers["correo"]}`);
// }).catch((error) => {
//     console.error("Error al ingresar el correo electrónico", error);
// });

// inquirer.prompt([
//     {
//     type: "checkbox",
//     name: "fruits",
//     message: "¿Cuáles son tus frutas favoritas?",
//     choices: ["Manzana", "Banana", "Pera", "Uva", "Fresa", "Mango", "Naranja"],
//     },
// ]).then((answers) => {
//     console.log(`Tus frutas favoritas son: ${answers["fruits"].join(", ")}`);
//     if (answers["fruits"].includes("Manzana") && answers["fruits"].includes("Banana")) {
//         console.log("¡Licuado fresco!");
//     } else if (answers["fruits"].includes("Manzana") && answers["fruits"].includes("Naranja")) {
//         console.log("¡Licuado acido!");
//     } else if (answers["fruits"].includes("Banana") && answers["fruits"].includes("Naranja")) {
//         console.log("¡Licuado jumex!");
//     } else {
//         console.log("¡Combinación no disponible!");
//     }
// });
