class Persona {
    //No tenemos que crear variables globales como en java
    //con this se entiende
    constructor (nombre, apellido){
        this.nombre = nombre;
        this.apellido = apellido; 
    }

}
//Se crea un objeto de la clase y sus argumentos
let persona1 = new Persona("Juan", "Perez");
console.log(persona1);

let persona2 = new Persona("Carlos", "Lara");
console.log(persona2);