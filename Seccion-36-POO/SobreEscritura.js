class Empleado{
    constructor(nombre, sueldo){
        this._nombre = nombre;
        this._sueldo = sueldo;
    }
    obtenerDetalles(){
        return `Empleado: nombre: ${this._nombre}, sueldo: ${this._sueldo}`;
    }
}

class Gerente extends Empleado{
    constructor (nombre, sueldo, departamento){
        super(nombre, sueldo);
        this._departamento = departamento;
    }
    obtenerDetalles(){
        return `Gerente: ${super.obtenerDetalles()}, departamento: ${this._departamento}`;
    }
}

let empleado1 = new Empleado("Pato", "$15000");
console.log(empleado1.obtenerDetalles());

let gerente1 = new Gerente("Panda", "$10000", "Sistemas");
console.log(gerente1.obtenerDetalles());