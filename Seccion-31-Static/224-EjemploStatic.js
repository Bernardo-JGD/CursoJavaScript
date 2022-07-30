class Persona {

    static contadorPersona = 0;//Atributo de clase

    constructor(nombre, apellido){
        this._nombre = nombre;
        this._apellido =apellido;
        //Por cada objeto que creemos de tipo persona, estamos asignando un nuevo identificador 
        //ya que estamos incrementado el contador estatico de esta variable 
        //lo incrementamos en 1 por cada objeto que se cree
        this.idPersona = ++Persona.contadorPersona;
    }

    get nombre(){
        return this._nombre;
    }
    set nombre(nombre){
        this._nombre = nombre;
    }
    get apellido(){
        return this._apellido;
    }
    set apellido(apellido){
        this._apellido = apellido;
    }

    nombreCompleto(){
        return this._nombre + " " + this._apellido;
    }
    toString(){
        return this.idPersona + " " +this.nombreCompleto();
    }
    static saludar(){
        console.log("Saludos desde el metodo static");
    }
    static saludar2(persona){
        console.log(persona.nombre + " " + persona.apellido);
    }

}

class Empleado extends Persona{
    constructor(nombre, apellido, departamento){
        super(nombre, apellido);
        this._departamento = departamento;
    }
    get departamento(){
        return this._departamento;
    }
    set departamento(departamento){
        this._departamento = departamento;
    }
    //Sobre-escribir un metodo heredado
    nombreCompleto(){
        return super.nombreCompleto() + " " + this._departamento;
    }
}

//Cada vez que creemos un objeto de la clase padre o hija incrementa la variable
//contadorPersona
let persona1 = new Persona("María", "García");
console.log(persona1.toString());


let empleado1 = new Empleado("Grunt", "Amrillo", "Granadas");
console.log(empleado1.toString());

console.log(Persona.contadorPersona);

let persona2 = new Persona("Pato", "Ramirez");
console.log(persona2.toString());
console.log(Persona.contadorPersona);