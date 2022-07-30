const autos = ["BMW", "Mercedes Benz", "Volvo"];

console.log(autos);

//Se imprime igual que java
console.log(autos[0]);
console.log(autos[1]);
console.log(autos[2]);

//se recorre igual que en java
for(let i = 0; i < autos.length;  i++){
    console.log(i + " : " + autos[i]);
}

//se modifica el valor igual que en java
autos[1] = "Pez";
for(let i = 0; i < autos.length; i++){
    console.log(autos[i]);
}

//Para agregar elementos a un arreglo se utiliza el método "push()"
autos.push("Audi");//se agrega al final de nuestro arreglo
//esto no lo vi en java, así que para mi para este lenguaje es un nuevo dato
for(let i = 0; i < autos.length; i++){
    console.log(autos[i]);
}

//Hay otras formas de agregar un nuevo elemento pero hay que tener cuidado
console.log(autos.length);
//para poder agregar un nuevo elemento podemos utilizar "arreglo.length" para agregarlo en esa posición, generandola al mismo tiempo
autos[autos.length] = "Cadillac";//esto practicamente hace el tamaño del arreglo vuelva a cambiar
console.log(autos.length);

for(let i = 0; i < autos.length; i++){
    console.log(autos[i]);
}
//De la manera anterior podemos agregar elementos en posiciones no consecutivas al tamaño del arreglo, dejando espacios en vacios/null entre los elementos
autos[6] = "Porshe";
console.log(autos);
for(let i = 0; i< autos.length; i++){
    //la posicion vacia que "undefined" al recorrerlo
    console.log(autos[i])
}//hay que tener cuidado para no poner muchos espacios en blanco innecesarios