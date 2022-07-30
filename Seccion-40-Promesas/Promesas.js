//Recibe dos funciones de tipo callBack //la segunda se puede omitir
//resolver--Por si si funciona
//rechazar--por si no funciona
let miPromesa = new Promise( (resolver, rechazar) => {
    let expresion = true;
    if(expresion){
        resolver("Resolvio correcto");//este es el valor que recibe la primer funcion en caso de ser true
    }else{
        rechazar("Se produjo un error");//este es el valor que recibe la segunda funcion en caso de ser false
    }
} );
//las funciones de tipo callback pueden ser declaradas antes de enviarse como argumentos
//en este caso se declaran al mismo tiempo que se envian
miPromesa.then( valor => console.log(valor), error => console.log(error));

//usando el método catch

let miPromesa2 = new Promise( (resolver, rechazar) => {
    let expresion = false;
    if(expresion){
        resolver(2022);
    }else{
        rechazar(2020);
    }
});

//normalmente vamos a encontrar así la llamada de la promesa, separando por renglones
miPromesa2
.then(valor => console.log(valor))
.catch(error => console.log(error));