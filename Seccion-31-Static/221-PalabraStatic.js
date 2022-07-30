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
    //Un método static se asocia con la clase pero no con los objetos
    static saludar(){
        console.log("Saludos desde método static");
    }
    static saludar2(persona){
        console.log(persona.nombre + " " + persona.apellido)
    }
}

class Empleado extends Persona {
    constructor(nombre, apellido, departamento){
        super(nombre, apellido);
        this._departamento = departamento;
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

let empleado1 = new Empleado("Luigi", "Verde", "Nintendo");
console.log(empleado1.toString());

//persona1.saludar(); Un método static se asocia con la clase pero no con los objetos
//No es posible llamar un metodo static desde un objeto 
Persona.saludar();
Persona.saludar2(persona1);

//Las clases que heredan de una clase padre pueden utilizar los métodos static (mediante la clase, no el objeto)
Empleado.saludar(empleado1);
Empleado.saludar2(empleado1);
