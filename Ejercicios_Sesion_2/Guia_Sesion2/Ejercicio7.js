let personas =[
    {nombre: "Juna",edad:24},
    {nombre: "Maria",edad:23},
    {nombre: "Manfredis",edad:25},
    {nombre: "Ester",edad:30}
];

let personasOrdenadas = personas.sort((a,b) => a.edad - b.edad);
console.log(personasOrdenadas);