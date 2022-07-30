class Persona {

    static contadorObjetosPersona = 0;//Atributo de clase

    email = "Valor default email";//Atributo de nuestros objetos

    constructor(nombre, apellido){
        this._nombre = nombre;
        this._apellido =apellido;
        Persona.contadorObjetosPersona++;
        console.log(Persona.contadorObjetosPersona);
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
        return this.nombreCompleto();
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

let persona1 = new Persona("María", "García");
console.log(persona1.toString());

let empleado1 = new Empleado("Grunt", "Amrillo", "Granadas");
console.log(empleado1.toString());

Persona.saludar();
Persona.saludar2(persona1);

Empleado.saludar();
Empleado.saludar(empleado1);

console.log(Persona.contadorObjetosPersona);
console.log(Empleado.contadorObjetosPersona);

//Podemos acceder al atributo desde los objetos de la clase padre y de la clase hija
console.log(persona1.email);
console.log(empleado1.email);

//No podemos acceder al atributo desdee la clase directamente ni con la clase padre 
//ni con la clase hija
//-- console.log(Persona.email);
//-- console.log(Empleado.email);
