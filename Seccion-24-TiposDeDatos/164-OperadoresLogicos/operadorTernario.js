//              operación lógica ? valorSiVerdadero : ValorSiFalso
let resultado1 = (3>2) ? "Cierto": "Falso";
//y el valor si verdadero se asigna a la variable
console.log(resultado1);

let resultado2 = (3>4) ? "Cierto": "Falso";
console.log(resultado2);

let n1 = 5, n2 = 5;

let resultado3 = (n1==n2) ? 1 : 2;

if (resultado3){
    console.log(n1 + " si es igual a " + n2);
}else{
    console.log(n1 + " no es igual a " + n2);
}
let variable = "5";
let r1 = "numero", r2 = "cadena";
let resultado4 = (variable===5) ? true : false;

if (resultado4){
    console.log(variable + " es un " + r1);
}else{
    console.log(variable + " es una " + r2);
}

let parimpar = (5%2==0) ? "número par" : "numero impar";
console.log(parimpar);