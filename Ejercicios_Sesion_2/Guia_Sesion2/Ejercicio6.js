let personas = [
    {nombre:"Sergio", edad: 33, ciudad:"San Salvador"},
    {nombre:"Martha", edad: 35, ciudad:"San Salvador"},
    {nombre:"Marleni", edad: 50, ciudad:"Santa Tecla"},
    {nombre:"Sonia", edad: 25, ciudad:"San Miguel"}
];

function buscarPorNombre(arrayPersona, nombre){
    return arrayPersona.find(objeto => objeto.nombre === nombre);
}

let personaBuscada = buscarPorNombre(personas, "Martha");
console.log(personaBuscada);