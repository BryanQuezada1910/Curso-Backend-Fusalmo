let listaCompras = {
    "Manzanas": 5,
    "Platanos": 3,
    "Elotes": 2,
    "Pan": 1
};

function generarListaCompras(listaCompras) {
    let listaLegible = "Lista de compras: \n";

    for (const elemeto in listaCompras) {
        listaLegible += `${elemeto}: ${listaCompras[elemeto]} unidades \n`;
    }
    return listaLegible;
}

let listaLegible = generarListaCompras(listaCompras);
console.log(listaLegible);