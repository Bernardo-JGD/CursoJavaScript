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

function determinarTipo(tipo){//recibe un argumento general, no se define el tipo hasta que recibe en parámetro
    console.log(tipo.obtenerDetalles());
    if (tipo instanceof Gerente){
        console.log("Es de tipo gerente");
        console.log(tipo.departamento);
    }else{
    if(tipo instanceof Empleado){
        console.log("Es de tipo empleado");
        console.log(tipo.departamento);
    }else{
        if(tipo instanceof Object){
            console.log("Es de tipo object");
        }
    }
}
    //Como funciona esto
    /*
        1) tipo: el tipo de dato que queremos comparar
        2) instanceof: palabra reservada para preguntar el tipo de dato
        3) Empleado: el tipo de dato o clase con la que comparamos el primer parámetro 
    */
}

let empleado1 = new Empleado("Pato", "$15000");
let gerente1 = new Gerente("Panda", "$10000", "Sistemas");

determinarTipo(empleado1);
determinarTipo(gerente1);
