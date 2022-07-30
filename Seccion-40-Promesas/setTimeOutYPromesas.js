//Una promesa puede tener 2 funciones callback o solo 1, 
//por ahora utilizaremos solo la primera, donde se resuelve

let promesa = new Promise( (resolver) => {
    console.log("Inicio de la promesa");
    setTimeout( () => resolver("Promsea con timeout"), 3000);
    console.log("Fin de la promesa");
    //en este caso los mensaje se van a imprimir primero y después la funcion timeOut
    //esto es trabajar de manera asincrona
} );

promesa.then( valor => console.log(valor) );