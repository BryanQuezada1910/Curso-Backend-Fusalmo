let personas = [
    {nombre:"Sergio", edad: 33, ciudad:"San Salvador"},
    {nombre:"Martha", edad: 35, ciudad:"San Salvador"},
    {nombre:"Marleni", edad: 50, ciudad:"Santa Tecla"},
    {nombre:"Sonia", edad: 25, ciudad:"San Miguel"}
];

function filtarPersonas(personaObjeto, ciudad) {
    return personaObjeto.filter(persona => persona.edad > 30 && persona.ciudad === ciudad);
}

let personasFiltradas = filtarPersonas(personas, "San Salvador");
console.log(personasFiltradas);