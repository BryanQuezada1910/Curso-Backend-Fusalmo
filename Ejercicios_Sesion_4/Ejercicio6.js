function paso1() {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(5)
            console.log("Paso 1 funcionando")
        }, 1000);
    })
}

function paso2(num) {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(num * 2)
            console.log("Paso 2 funcionando")
        }, 1000);
    })
}

function paso3(num) {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(num + 2)
            console.log("Paso 3 funcionando")
        }, 1000);
    })
}

paso1().then(paso2).then(paso3).then((resultado) => {
    console.log('Resultado es: ', resultado)
})