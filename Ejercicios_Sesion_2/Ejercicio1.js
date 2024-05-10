class Bebe {
    constructor(nombre, edad) {
        this.nombre = nombre;
        this.edad = edad;
    }

    llorar() {
        console.log(`${this.nombre}, de ${this.edad} meses, está llorando.`);
    }

    dormir() {
        console.log(`${this.nombre}, de ${this.edad} meses, está durmiendo.`);
    }

    comer() {
        console.log(`${this.nombre}, de ${this.edad} meses, está comiendo.`);
    }
}

const antonio = new Bebe('Antonio', 3);
const sonia = new Bebe('Sonia', 5);
const javier = new Bebe('Javier', 8);

antonio.llorar();
antonio.dormir();
antonio.comer();
sonia.llorar();
sonia.dormir();
sonia.comer();
javier.llorar();
javier.dormir();
javier.comer();
