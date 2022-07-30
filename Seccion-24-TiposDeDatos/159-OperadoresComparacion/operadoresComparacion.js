let a = 3, b = 2, c = "3";

//Operadores de comparacion IGUAL

//retorna un valor booleano si se cumple la condicion
//Rrevisión no estricta de tipos
let z = a == c;//revisa el valor sin importar si son del mismo tipo o no,
              // en caso de que no y el valor es igual retorna true, 
              //si el valor es diferente retorna false
console.log(z);

//Revisión estricta de tipos
z = a === c;//revisa los valores pero también los tipos, si el tipo no es igual
            //ya no revisa el valor y retorna false
console.log(z);


//---------------------------------------------------
//Operadores de comparación DISTINTO 

a = 3, b = 2, c = 3;

//Distinto que NO estricto
z = a != c;
console.log(z);

//Distinto estricto 
z = a !== c;
console.log(z);


//---------------------------------------------------
//Mayores y menores, que
a = 3, b = 3, c = "3";

z = a < b;
console.log(z);

z = a <= b;
console.log(z);

z = a > b;
console.log(z);

z = a >= b;
console.log(z);