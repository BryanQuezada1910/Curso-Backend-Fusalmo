function retrasoPromesa(ms) {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(`La promesa se ha resuelto en ${ms} milisegundos`);
    }, ms);
  });
}

retrasoPromesa(3000).then((mensaje) => {
  console.log(mensaje);
});
