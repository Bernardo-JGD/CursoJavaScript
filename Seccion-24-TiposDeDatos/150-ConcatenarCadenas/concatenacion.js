//Concatenar cadenas, muy similar a Java. Se pueden utilizar comillas simples
var nombre = 'Bernardo';
var apellido = 'Guzman';
var nombreCompleto = nombre + ' ' + apellido;
console.log(nombreCompleto);

var nombreCompleto2 = 'Jose' + ' ' + 'Díaz';
console.log(nombreCompleto2);

//Contexto cadena o contexto String
//Si primero encuentra una cadena, y luego numeros, los numeros se convierten en formato cadena
var x = nombre + 4 + 7;
console.log(x);

//pero si los números están entre paréntesis, se realiza la operación primero y el resultado se toma como tipo cadena
x = nombre + (4 + 11);
console.log(x);

//pero si primero encuentra los números aunque no tengan paréntesis, realiza la operación y luego los concatena
//como cadena a la cadena que sigue
x = 15 + 6 + nombre;
console.log(x);