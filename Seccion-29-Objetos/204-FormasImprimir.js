let persona = {
    nombre: "Miau",
    apellido: "Galleta",
    email: "miau@gmial.com",
    edad: 3000, 
    nombreCompleto: function(){
        return this.nombre + " " + this.apellido;
    }
}

//para imprimir un valores de propiedades en un navegador es distinto

//Forma 1
//Concatenar cada valor de cada propiedad
console.log(persona.nombre + ", " + persona.apellido);

//Forma 2
//for in
for(nombrePropiedad in persona){
    console.log(persona[nombrePropiedad]);
}

//Forma 3
//Object.values(nombreObjeto);
//Le pasamos los valores de un objeto a un arreglo nuevo
let personaArray = Object.values(persona);
console.log(personaArray);

 //Forma 4
 //JSON.stringify(nombreObjeto);
 //stringify toma el nombre de la propiedad y el valor que contiene y concatena todos en una cadena
let personaString = JSON.stringify(persona);
//Se imprimen los nombre de las propiedades y sus vaores en una sola cadena
console.log(personaString);
