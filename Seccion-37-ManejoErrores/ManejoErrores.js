'use strict'

try{
    x = 10;
}catch(error){
    console.log(error);//el error manda el tipo del error y el mensaje del error
}

try{
    miFuncion();
}catch(error){
    console.log(error);//también detecta funciones que no han sido declaradas
}finally{
    console.log("El método finally se ejecuta haya o no haya errores detectados\n en el try catch");
}


console.log("Finaliza el programa");