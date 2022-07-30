'use strict'
let resultado = -1;

try{
    //is Not a Number
    if(isNaN(resultado))throw 'No es un número';
    else if(resultado === '') throw 'Es cadena vacia';
    else if(resultado >= 0 ) throw 'Es positivo';
    else if(resultado <0 ) throw 'Es negativo'; 
    //throw es para generar errores propios 
    //throw puede recibir otro valor, un número, booleano, cadena, etc
}catch(error){
    console.log(error);
    //console.log(error.name); envia el nombre del error
    //console.log(error.message); envia lo que significa el error
}
finally{
    console.log("Terminó el programa");
}