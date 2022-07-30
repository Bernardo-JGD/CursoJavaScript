/* El método call nos va a permitir llamar un metodo
   que está definido en un objeto desde otro objeto
*/

let persona1 ={
    nombre: "Juan", 
    apellido: "Perez",
    nombreCompleto: function(){
        return this.nombre + " " + this.apellido;
    }
}

let persona2 = {
    nombre: "Carlos",
    apellido: "Lara"
}

//Uso de call para usar el método persona1.nombreCompleto con los datos de persona2
console.log(persona1.nombreCompleto());

//nombreObjeto.nombreMetodo.call(nombreOtroObjeto);
console.log(persona1.nombreCompleto.call(persona2));
