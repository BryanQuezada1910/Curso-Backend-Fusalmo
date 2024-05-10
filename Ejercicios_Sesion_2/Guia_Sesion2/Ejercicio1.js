function contarPalabras(array){
    let contarPalabras = {};
    array.forEach(cadena => {
        let palabras = cadena.split(/\s+/);
        palabras.forEach(palabra => {
            if (contarPalabras[palabra]) {
                contarPalabras[palabra]++;
            } else {
                contarPalabras[palabra] = 1;
            }
        });
    });
    return	contarPalabras;
}

let palabrasArray =["Hola buenos dias", "Hola buenas tardes", "Hola buenas noches"];
let resultado = contarPalabras(palabrasArray);
console.log(resultado);