//Tipos primitivos
let x = 10;

function cambiarValor(a){
    a = 20;
}
//Paso por valor
cambiarValor(x);//10
console.log(x); 

//referencia
const persona = {
    nombre: "Juan",
    apellido: "Perez"
}
console.log(persona.nombre);
console.log(persona.apellido);

function cambiarValorObjeto(p1){
    //se cambian los valores de la constante persona
    p1.nombre =  "Wof";
    p1.apellido = "Lomito";
}
//Para que los cambios de valor hechos dentro de la funcion se realicen, 
//se debe de mandar a llamar la función y enviar el argumento a su parámetro, 
//esto hace que los valores del objeto se realicen directamente sobre el mediante una variable auxiliar,
//si comento o elimino la siguiente línea, los valores originales se mantienen igual.
cambiarValorObjeto(persona);
console.log(persona.nombre);
console.log(persona.apellido);