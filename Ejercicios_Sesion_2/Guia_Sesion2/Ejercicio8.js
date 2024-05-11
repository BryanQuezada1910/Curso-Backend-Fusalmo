function validarObjeto(objeto) {
    const propiedades = ['nombre', 'direccion', 'telefono'];
    for (const propiedad of propiedades) {
        if(objeto.hasOwnProperty(propiedad)){
            let msj = "Objeto Aprobado";
            return msj;
        }else{
            let msj = "Objeto no aprobado";
            return msj;
        }
    }

}

let cliente = {nombre: "William",direccion: "San Miguel",telefono:7777777};
console.log(validarObjeto(cliente));