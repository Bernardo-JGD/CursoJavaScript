/*Tipos de datos
Comentario de varias líneas
*/ 
//Tipo de dato string
var nombre = "Carlos";
console.log(nombre);

//Tipo de dato numérico
var numero = 1000;
console.log(numero);

//Tipo de dato Object
var objeto = {
    nombre: "Juan",
    apellido: "Perez",
    telefono: "831831831"
}

console.log(objeto);
//typeof me dice el tipo de datos de la variable
console.log(typeof objeto);
console.log(typeof nombre);
nombre = 123;
console.log(typeof nombre);
nombre = 10.5;
console.log(typeof nombre);

//Tipo de dato boolean (true, false)

var bandera = true;
console.log(bandera);
console.log(typeof bandera);
bandera = false;
console.log(bandera);
console.log(typeof bandera);

//Tipo de dato function

function miFuncion (){}
console.log(miFuncion);
console.log(typeof miFuncion);

//Tipo de dato Symbol

var simbolo = Symbol("Mi simbolo");
console.log(simbolo);
console.log(typeof simbolo);

//Tipo clase es una function
//Una clase es un tipo función
class Persona{
    constructor(nombre, apellido){
        this.nombre = nombre;
        this.apellido = apellido;
    }
}

console.log(Persona);
console.log(typeof Persona);

//Tipo de dato undefine

var x;//cuando no asignamos un valor, por defecto es undefine
console.log(x);
console.log(typeof x);

var xx = undefined;//también podemos asignar como valor undefine
console.log(xx);
console.log(typeof xx);

//Tipo de datos null
//null = ausencia de valor
var y = null;
console.log(y);
console.log(typeof y);

//Arreglos

var autos = ['BMW', 'Audio', 'Volvo'];
console.log(autos);
console.log(typeof autos);

//Cadena vacia

var z = '';
console.log(z);
console.log(typeof z);
