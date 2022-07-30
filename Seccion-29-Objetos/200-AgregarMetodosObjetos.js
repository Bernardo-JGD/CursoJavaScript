//Para agregar un método, separamos por coma como si fueramos a
//agregar otra propiedad. 
//para mandar a llamar las propiedades dentro una una funcion que esta dentro de
//la declaracion del método utilizamos "this.nombreDeLaPropiedad"
let persona ={
    nombre: "Bernardo",
    apellido: "Díaz", 
    email: "guzman.gmail.com",
    edad: 22, 
    nombreCompleto: function(){
        return this.nombre + " " + this.apellido;
    },
    miFuncion: function(){
        return "Edad: " + this.edad;
    }
}
//recordar que como es una función lleva paréntesis al llamarla
console.log(persona.nombreCompleto());
console.log(persona.miFuncion());