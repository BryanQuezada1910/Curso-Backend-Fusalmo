let estudiante = [
    {nombre: "Grecia", edad: 20},
    {nombre: "Luis", edad: 22},
    {nombre: "Anderson", edad: 21}
];

let profesores = [
    {nombre: "Juan", materia: "Matematicas"},
    {nombre: "Medardo", materia: "Leguaje"},
    {nombre: "Antonio", materia: "Ciencias"}
];

function combinarObjetos(a, b) {
    let comunidadEducativa = [...a, ...b];
    return comunidadEducativa;
}

let comunidad = combinarObjetos(estudiante, profesores);
console.log(comunidad);