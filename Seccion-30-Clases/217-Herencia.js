class Persona{
    constructor (nombre, apellido){
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
}

//Para heredar a una nueva clase utilizamos la siguiente sintaxis
//class nombreNuevaClase extends claseQueHereda{}
class Empleado extends Persona{
    //Creamos un constructor propio y agregamos los nuevos parámetros
    //Tambien neceesitamos indicar los atributos de la clase padre dentro del nuevo constructor y posteriormente los propios
    constructor(nombre, apellido, departamento){
        //con el metodo super agregamos los parametros que son originalmente de la clase padre
        //super(atributosClasePadre,..., );
        super(nombre, apellido);//Llamamos al constructor de la clase padre
        this._departamento = departamento;
    }
    get departamento(){
        return this._departamento;
    }
    set departamento(departamento){
        this._departamento = departamento;
    }
}

let empleado1 = new Empleado ("Maria", "Jimenez", "Sistemas");
//La clase que hereda de padre puede utilizar los métodos get y set
console.log(empleado1);
console.log(empleado1.nombre);
empleado1.apellido = "Elena";
console.log(empleado1.apellido);