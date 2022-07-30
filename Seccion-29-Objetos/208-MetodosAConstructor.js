function Persona(nombre, apellido, email){
    this.nombre = nombre;
    this.apellido = apellido;
    this.email = email;
    //Así se crean métodos para objetos
    this.nombreCompleto = function(){
        return this.nombre + " " + this.apellido;
    }

} 
//aquí los constructores se comienzan a comportar como en java
let padre = new Persona("Pancho", "Pachon", "pp@gmail.com");
console.log(padre);

let madre = new Persona("Pachona", "Pan", "pan@gmail.com");
console.log(madre);

padre.nombre = "Panchoncito";
console.log(padre);
console.log(madre);

console.log(padre.nombreCompleto());
console.log(madre.nombreCompleto());
