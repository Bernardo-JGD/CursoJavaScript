function Persona(nombre, apellido, email){
    this.nombre = nombre;
    this.apellido = apellido;
    this.email = email;
    this.nombreCompleto = function(){
        return this.nombre + " " + this.apellido;
    }
}

let padre = new Persona("Pancho", "Pachon", "pp@gmail.com");
console.log(padre);

let madre = new Persona("Pachona", "Pan", "pan@gmail.com");
console.log(madre);

//Formas de declarar un objeto, formal, simplificadalet miObjeto = new Object();
let miObjeto2 = {};

let miCadena1 = new String ("Cadena");
let miCadena2 = "Hola";

let miNumero1 = new Number(1);
let minumero2 = 1;

let miBoolean1 = new Boolean(false);
let miBoolean2 = false;

let miArreglo1 = new Array();
let miArreglo2 = [];

let miFuncion1 = new Function();
let miFuncion2 = function (){

};