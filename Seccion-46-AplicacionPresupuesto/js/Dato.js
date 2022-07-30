class Dato{
    //Este constructor va a tener los datos que va a compartir 
    //las clases de ingreso y egreso 
    constructor(descripcion, valor){
        this._descripcion = descripcion;
        this._valor = valor;
    }

    get descripcion(){
        return this._descripcion;
    }

    set descripcion(descripcion){
        set._descripcion = descripcion;
    }

    get valor(){
        return this._valor;
    }

    set valor(valor){
        this._valor = valor;
    }
}