class Persona{
    constructor(nombre, apellido){
        this._nombre = nombre;
        this._apellido = apellido;
    }
    get nombre(){
        return this._nombre;
    }
    set nombre(nombre){
        this._nombre = nombre;
    }
    get apellido(){
        return this._nombre;
    }
    set apellido(apellido){
        this._apellido = apellido;
    }
    nombreCompleto(){
        return this._nombre + " " + this._apellido;
    }
    //Estamos sobre-esceibiendo el metodo de la clase Padre (Object)
    toString(){
        //Se aplica polimorfismo (multiples formas en tiepos de ejecucion)
        //el método que se ejecuta depende si es una referencia de tipo padre
        //o de tipo hijo
        return this.nombreCompleto ();
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
    nombreCompleto(){
        return super.nombreCompleto() + " " + this._departamento;
    }
}
let persona1 = new Persona("Juan", "Bigotes");
//indirectamente el método que se manda a llamar es el de nombreCompleto()
console.log(persona1.toString());


let empleado1 = new Empleado("Elena", "Garcia", "Matematicas");

//Polimorfismo
//Desde un objeto vamos a poder mandar a llamar a un método definido en la clase padre
//o en la clase hija, pero esto va a depender del tipo de objeto con el que estemos trabajando. 
//Si estamos trabajando con una referencia de un objeto de la clase hija entonces el metodo
//que se manda a ejecutar es el de la clase hija
console.log(empleado1.nombreCompleto());
console.log(empleado1.toString());