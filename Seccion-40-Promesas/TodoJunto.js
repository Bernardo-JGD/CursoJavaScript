//promesas, awit, async y setTimeOut

async function funcionConPromesaAwitTimeout(){
    console.log("Inicio de funcion");
    let miPromesa = new Promise(resolver =>{
        setTimeout(() => resolver("promesa con await y timeout"), 3000);
    });
    console.log(await miPromesa);//no podemos usar la palabra reservada await sin async
    //debido a que en este caso si estamos esperando la respuesta de la promesa
    //entonces el fin de la función no se va a imprimir hasta que se haya terminado de procesar la promesa
    console.log("Fin de la funcion");
}

funcionConPromesaAwitTimeout();