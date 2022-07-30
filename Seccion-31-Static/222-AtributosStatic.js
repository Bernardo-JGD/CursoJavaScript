class Persona{
    //Creando un atributo static
    static contadorObjetosPersona = 0;

    constructor(nombre, apellido){
        this._nombre = nombre;
        this._apellido = apellido;
        //No llamar un atributo static con "this", solo con la clase
        //Incrementa al ser llamado el constructor con un objeto
        Persona.contadorObjetosPersona++;
        console.log(Persona.contadorObjetosPersona);
    }
    get nombre (){
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
        console.log("Saludos desde metodo static");
    }
    static saludar2(persona){
        console.log(persona.nombre + " " + persona.apellido);
    }
}

class Empleado extends Persona {
    constructor(nombre, apellido, departamento){
        super(nombre, apellido);
        this._departamento = departamento;
        //Incrementa al ser llamado el constructor con un objeto
        //Aquí se hereda así que vuelve a ser llamado el constructor de la clase padre
        console.log(Persona.contadorObjetosPersona);
    }
    get departamento (){
        return this._departamento;
    }
    set departamento(departamento){
        this._departamento = departamento;
    }
    nombreCompleto(){
        return super.nombreCompleto() + " " + this._departamento;
    }
}

let persona1 = new Persona("Maria", "Jimenez");
console.log(persona1.toString());

let empleado1 = new Empleado("VC1", "Terran", "Minerals");
console.log(empleado1.toString());

Persona.saludar();
Persona.saludar2(persona1);

Empleado.saludar(empleado1);
Empleado.saludar2(empleado1);

//Un atributo static se llama solo con la clase ya que solo pertenece a ella y no a los objetos
console.log(Persona.contadorObjetosPersona);

//Las clases hija también heredan los atributos static
console.log(Empleado.contadorObjetosPersona);

//Arroja dos porque primero incrementa al llamarse el constructor en la clase padre
//Y luego incrementa al llamar el constructor con la clase hija