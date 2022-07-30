function Persona(nombre, apellido, email){
    this.nombre = nombre;
    this.apellido = apellido;
    this.email = email;
    this.nombreCompleto = function(){
        return this.nombre + " " + this.apellido;
    }
}
//Si queremos asignar una nueva propiedad al objeto: 
//nombreObjeto.prototype.nombrePropiedad;
//Pero si queremos que esa propiedad tenga valor por default y para todos los objetos creados
//nombreObjeto.prototype.nombrePropiedad = valorPropiedad;

Persona.prototype.tel = "8318982332";

let padre = new Persona ("Juan", "Perez", "jperez@gmail.com");
padre.tel = "8318982330";
console.log(padre.tel);

let madre = new Persona("Laura", "Quinterio", "lquintero@gmail.com");
madre.tel = "8318982329";
console.log(madre.tel);