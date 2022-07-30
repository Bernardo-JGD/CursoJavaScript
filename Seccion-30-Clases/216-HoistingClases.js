//No podemos crear objetos de clases que no han sido definidas (en orden de líneas de código)
//No pudemos declarar un objeto antes de la clase  let persona3 = new Persona("", "");
class Persona {
    constructor (nombre, apellido){
        this._nombre = nombre;
        this._apellido = apellido;
    }
    get nombre(){
        return this._nombre;
    }
    set nombre(nombre){
        this._nombre = nombre;
    }
}

let persona1 = new Persona("Juan", "Perez");
console.log(persona1.nombre);
persona1.nombre = "Juan Carlos";
console.log(persona1.nombre);