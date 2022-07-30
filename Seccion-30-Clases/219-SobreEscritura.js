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
    //Sobre-escritura
    //Escribimos exactamente igual el método que quremos sobreescribir
    nombreCompleto(){
        //Para llamar los atributos que retorna:
        //super.nombreMetodo()---Esto retorna los valores que arroja el metodo en la clase padre
        return super.nombreCompleto() + this._departamento;
    }
}

let empleado1 = new Empleado("Bob", "Toronja", "Construccion");
console.log(empleado1.nombreCompleto());