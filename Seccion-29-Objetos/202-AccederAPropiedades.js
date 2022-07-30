let persona = {
    nombre: "Berna",
    apellido: "Diaz",
    email:"berna@gmail.com",
    edad: 22, 
    nombreCompleto: function(){
        return this.nombre + " " + this.apellido;
    }
}

console.log(persona.nombre);
//Esta es otra forma de acceder a la propiedad de un objeto
//nombreObjeto["nombreDeLaPropiedad"]; // Y nos arroja el valor contenido en esa propiedad
console.log(persona["edad"]);

//Podemos recorrer un objeto con un for especial: for in
//Es como un for each
for(nombrePropiedad in persona){
    //Con esta línea accedemos al NOMBRE de cada una de las propiedades que tiene el objeto
    console.log(nombrePropiedad);
    //Con esta siguiente línea accedemos al VALOR contenido en el nombre de cada propiedad
    console.log(persona[nombrePropiedad]);
}


