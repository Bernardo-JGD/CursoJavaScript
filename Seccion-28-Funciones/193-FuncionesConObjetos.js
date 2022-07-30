function miFuncion(a, b){
    //Si queremos saber la cantidad de argumentos de la funcion podemos utilizar "arguments"
    console.log(arguments.length);
    //al parecer solo me muestra el valor cuando la funcion es llamada, si no no lo hace
    //para poder utilizarla tenemos que estar dentro del cuerpo de la funcion, podemos estar afuera
    return a + b;
}
console.log(typeof miFuncion);
console.log(miFuncion(1,2));
//las funciones también puden ser decritas como objetos

//Con este método hacemos que todo el código se convierta en valores string literalmente y lo asignamos a una variable
let funcionATexto = miFuncion.toString();
console.log(funcionATexto);

