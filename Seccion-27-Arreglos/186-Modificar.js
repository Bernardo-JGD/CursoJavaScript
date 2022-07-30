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