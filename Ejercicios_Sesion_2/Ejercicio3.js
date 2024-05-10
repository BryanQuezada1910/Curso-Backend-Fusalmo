class Persona {
    constructor(peso, altura) {
        this.peso = peso;
        this.altura = altura;
    }

    calcularIMC() {
        return this.peso / (this.altura ** 2);
    }

    mostrarIMC() {
        const imc = this.calcularIMC();
        console.log(`El IMC de la persona con un peso de ${this.peso}kg y una altura de ${this.altura}m es: ${imc.toFixed(2)}`);
    }
}

let peso = 80;
let altura = 1.78;

const persona = new Persona(peso, altura);

persona.mostrarIMC();
