class Persona {

    static contadorPersona = 0;//Atributo de clase

    //simulamos una constante static con un método get
    static get MAX_OBJ (){
        return 5;
    }

    constructor(nombre, apellido){
        this._nombre = nombre;
        this._apellido =apellido;

        if(Persona.contadorPersona<Persona.MAX_OBJ){
            this.idPersona = ++Persona.contadorPersona;
        }else{
            console.log("Se ha superado la cantidad máxima de objetos permitidos");
        }

        
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

//Funciona como una constante
console.log(Persona.MAX_OBJ);


let persona3 = new Persona("A", "B");
let persona4 = new Persona("C", "D");
let persona5 = new Persona("E", "F");
let persona6 = new Persona("G", "H");

//Cuando la variable contadorPersona es mayor que el método
//static que retorna 5, entonces el atributo de id ya no puede ser incrementado
//por lo tanto ya no puede ser asignado y solo se muestra un mensaje simulando la excepcion
console.log(Persona.contadorPersona);
console.log(persona4.toString());
console.log(persona5.toString());

