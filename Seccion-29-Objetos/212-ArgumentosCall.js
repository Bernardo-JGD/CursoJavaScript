let persona1 = {
    nombre: "Juan",
    apellido: "Perez",
    nombreCompleto: function(titulo, telefono){
        return titulo + " " + this.nombre + " " + this.apellido + " " + telefono;
    }
}

let persona2 = {
    nombre: "Carlos",
    apellido: "Lara"
}
//Pasando argumentos a un método
console.log(persona1.nombreCompleto("Licuado", "831"));
//Pasar argumentos usando call: 
//nombreObjeto.nombreMetodo.call(nombreOtroObjeto, argumento1, argumento2... argumentoN);
console.log(persona1.nombreCompleto.call(persona2, "Ing", "8318982339"));