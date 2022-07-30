let sumar = function(a, b){
    //podemos mostrar el valor de los argumentos de esta manera
    //ya que se almacenan como si estuvieran en un arreglo
    console.log(arguments[0]);
    console.log(arguments[1]);
    return a + b;
};

let resultado = sumar(1, 2);
console.log(resultado);

//JavaScript nos permite definir el argumento de los parametros desde su declaracion
let sumar2 = function(a = 5, b = 6){
    console.log(arguments[0]);
    console.log(arguments[1]);
    return a + b
};
//así no necesitamos indicar argumentos al llarmar la variable que almacena la funcion
let resultado2 = sumar2();
console.log(resultado2);

let sumar3 = function(a, b){
    console.log(arguments[0]);
    console.log(arguments[1]);
    return a + b
};
//en caso de que no se le indiquen argumentos de ningun modo, no puede realizar las operaciones
//e indica NaN (Not a Number)
let resultado3 = sumar3();
console.log(resultado3);

let sumar4 = function(a=2, b=4){
    //los argumentos toman el valor sobre escrito
    console.log(arguments[0]);
    console.log(arguments[1]);
    //podemos asignar un argumento que no tenga variable dentro de los parámetros y aun así se recibirá el valor dentro de la función
    console.log(arguments[2]);
    //podemos acceder a un argumento no declarado como no definido
    console.log(arguments[4]);
    return a + b + arguments[2]//podemos utilizar el valor del argumento dentro de las operaciones de la función de esta manera, aunque el parámetro no este declarado
};
//En este caso estamos sobreescribiendo los valores de los argumentos, ya que al 
//ser declarada la función ya están inicializados, pero al llamarla le indicamos unos nuevos
let resultado4 = sumar4(7, 9, 3);//podemos enviar un argumento que no tenga parámetro indicado en la declaración de la función
console.log(resultado4);