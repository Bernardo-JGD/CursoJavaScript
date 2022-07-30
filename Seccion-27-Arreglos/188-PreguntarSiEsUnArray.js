const autos = ["BMW", "Mercedes Benz", "Volvo"];

//solo nos dice que es un objeto, pero no sabemos si es un arreglo
console.log(typeof autos);

//con la función "Array.isArray(objetoAchecar)" podemos saber si es un arreglo, retorna true o false
console.log(Array.isArray(autos));

//Esta es otra forma de preguntar si es un Array, devuelve true o false
console.log(autos instanceof Array);