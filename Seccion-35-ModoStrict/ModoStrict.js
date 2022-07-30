"use strict"//agregando esto obligamos a nuestro programa a que no permita
            //que se agreguen variables sin haberlas declarado antes

//ejemplos mal, sin inicializar
/*x = 10;
console.log(x);
*/

//Ejemplo bien
let x = 10;
console.log(x);

//También sirve con funciones
//Ejemplo mal, variable no declarada dentro de la función
/*miFuncion();
function miFuncion(){
    y = 15;
}*/

//podemos usar el "use strict" dentro de una función para
//que no permita que se agreguen varaibles sin inicializar
function miFuncion(){
    "use strict"
    let y = 15;
    console.log(y);
}

