let a = 3, b = 2;

//Operadores aritméticos
let z = a + b;
console.log("Resultado de la suma: " + z);

z = a - b;
console.log("Resultado de la resta: " + z);

z = a * b;
console.log("Resultado de la multiplicación: " + z);

z = a / b;
console.log("Resultado de la división: " + z);

z = a % b;//Residuo de la división
console.log("Resultado del modulo (residuo): " + z);

z = a ** b;
console.log("Resultado de operador exponente: " + z);

z = a + b;
//Incremento
//Pre-incremento (el operador ++ antes de la variable)
//Primero incrementa y luego asigna
z = ++a;
console.log(a);
console.log(z);

//Post-incremento (el operador ++ después de la variable)
//primero asigna y luego incrementa
z = b++;
console.log(b);
console.log(z);


//Decremento
//Pre-decremento
//Primero decrementa y luego asigna
z = --a;
console.log(a);
console.log(z);

//Post-decremento
//primero asigna y luego decrementa
z = b--;
console.log(b);
console.log(z);