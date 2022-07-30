//funciones asincronas

function miFuncionCallBack(){
    console.log('Saludo asincrono después de 3 segundos');
}
//esta función sirve para ejecutar otras funciónes después de un tiempo determinado
setTimeout(miFuncionCallBack, 3000);//el segundo parametro son los milisegundos

//otra forma de ejecutar esta función es mandarle directamente la función como parámetro

setTimeout(function(){console.log("segunda forma")}, 4000);

//Tambien se puede usar esta función con una función flecha comp parametro (sin declarar el nombre de la variable)

setTimeout( () => console.log("tercerca forma, con flecha"), 1000);
