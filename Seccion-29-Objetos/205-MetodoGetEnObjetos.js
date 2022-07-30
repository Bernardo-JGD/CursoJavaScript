let persona = {
    nombre: "Fufu", 
    apellido: "Papachon",
    email: "fufu@gmail.com",
    edad: 34,
    //Otra forma de mostrar funciones de objetos es con el método get
    //Asi ya no tenemos que escribir "function" 
    //get nombreFuncion(parametros){cuerpo return}
    get nombreCompleto(){
        return this.nombre + " " + this.apellido;
    }
}
//Se facilita la forma de llamar al objeto
console.log(persona.nombreCompleto);


//al parecer un método get equí no puede recibir parámetros, solo envia
/*
let suma = {
    valor1: 1,
    get operacion(valor2){
        return (this.valor1 + valor2); 
    }
}
let valor =suma.operacion(1);*/