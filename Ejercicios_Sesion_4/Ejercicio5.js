function operacionAsync(callback) {
    setTimeout(() => {
        callback('Operacion asincrona completada')
    }, 2000);
}

operacionAsync((mensaje) => {
    console.log(mensaje)
})