let a = 3, b = 2, c = 1, d = 4;

//Las expresiones en JavaScript se evaluan de izquierda a derecha
let z = a * b + c / d;
console.log(z);

//Se respeta la jerarquia de operadores
z = c + a * b / d;
console.log(z);

z = (c + a) * b / c;
console.log(z);


