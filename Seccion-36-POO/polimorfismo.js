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

function imprimir(tipo){//recibe un argumento general, no se define el tipo hasta que recibe en parámetro
    console.log(tipo.obtenerDetalles());
}

let empleado1 = new Empleado("Pato", "$15000");
let gerente1 = new Gerente("Panda", "$10000", "Sistemas");

imprimir(empleado1);//cuando le mandamos el parámetro identifica que método usar, el de la clase padre
imprimir(gerente1);//o el de la clase hija

