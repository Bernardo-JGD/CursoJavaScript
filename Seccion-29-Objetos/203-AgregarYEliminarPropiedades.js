let persona = {
    nombre: "Punchis",
    apellido: "Boing",
    email: "punchis@gmial.com", 
    edad: 3000,
    nombreCompleto: function(){
        return this.nombre + " " + this.apellido;
    }
}
//Con javascript podemos agregar o eliminar propiedades

//para agregar una nueva propiedad: nombreObjeto.nombreNuevaPropiedad = valorPropiedad;
persona.telefono = 8318982330;
//CUIDADO: si se escribe mal, se puede crear una nueva propiedad en vez de modificar
//el valor de una propiedad ya existente. 
//Por ejemplo
//persona.te1efono = 831898331;//tiene un "1" en vez de "l"
persona.telefono = 8318982332;
console.log(persona);

//Si queremos eliminar una propiedad: delete nombreObjeto.nombrePropiedad;
delete persona.telefono;
console.log(persona);
