class Persona{
    constructor(nombre, apellido){
        /*El metodo get no se puede llamar igual que la propiedad
          se acostumbra que la propiedades comiencen con un "_"
        */
        this._nombre = nombre;
        this._apellido = apellido;
    }
    get nombre(){
        return this._nombre;
    }
    set nombre(nombre){
        this._nombre = nombre;
    }
}

let persona1 = new Persona("Juan", "Perez");
console.log(persona1);
//Para los métodos get y set no necesitamos paréntesis al llamarse
console.log(persona1.nombre);


let persona2 = new Persona("Carlos", "Lara");
console.log(persona2);
//Utilizar el método set
//nombreObjeto.nombreMetodo = valorNuevo;
persona2.nombre = "Bob";
console.log(persona2.nombre);