function mostrarHoraActual() {
    const fecha = new Date();
    
    const hora = fecha.getHours();
    const minutos = fecha.getMinutes();
    const segundos = fecha.getSeconds();
    
    const horaFormateada = hora.toString().padStart(2, '0');
    const minutosFormateados = minutos.toString().padStart(2, '0');
    const segundosFormateados = segundos.toString().padStart(2, '0');
    
    const mensaje = `La hora actual es: ${horaFormateada}:${minutosFormateados}:${segundosFormateados}`;
    
    console.log(mensaje);
}

mostrarHoraActual();