//Como en java se puede llamar antes de que se declare, 
//a esto se le conoce como "Hoisting"
miFuncion(1, 2);

//declaración de una funcion
//al parecere los parametros no necesariamente reciben tipo de dato
function miFuncion(a, b){
    console.log("Suma: " + (a+b));
}

miFuncion(5, 7);
miFuncion(7, 8);

