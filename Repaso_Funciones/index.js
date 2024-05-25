const funciones = require('./funciones.js');
const fs = require('fs');

// Llama a la función para obtener la fecha
const fecha = funciones.obtenerFecha();

// Crea un objeto JSON con la fecha
const json = {
    fecha: fecha
};

// Puedes guardar el objeto JSON en un archivo si lo deseas
// Aquí hay un ejemplo utilizando el módulo fs de Node.js
const jsonStr = JSON.stringify(json);

fs.writeFile('fecha.json', jsonStr, (err) => {
    if (err) {
        console.error('Error al guardar el archivo:', err);
    } else {
        console.log('Archivo guardado exitosamente.');
    }
});