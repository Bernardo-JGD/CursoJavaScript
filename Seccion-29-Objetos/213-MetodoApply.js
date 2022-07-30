let persona1 = {
    nombre: "Juan",
    apellido: "Perez",
    nombreCompleto: function(titulo, telefono){
        //return this.nombre + " " + this.apellido;
        return titulo + " " + this.nombre + " " + this.apellido + " " + telefono;
     }
}

let persona2 = {
    nombre: "Carlos", 
    apellido: "Lara" 
}

//Uso de metodo Apply
//Este método nos va a permitir mandar a llamar un metodo
//en un objeto que no tiene definido cierto metodo 

console.log(persona1.nombreCompleto("Licuado", "117343"));

//Con call pasabamos los parámetros separados por comas directamente en la llamada
//Con apply creamos un arreglo y le asignamos los valores y ese arreglo lo enviamos
let arreglo = ["Inge", "8318982330"];
console.log(persona1.nombreCompleto.apply(persona2, arreglo));