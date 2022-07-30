/*isNaN
Not
a
Number
*/
let edad1 = "18x";
let siEs = " es una edad para votar";
let noEs = " no es una edad para votar";
if(isNaN(edad1)){
    console.log("No es un número");
}else{
    if(Number(edad)>=18){
        console.log(edad1 + siEs);
    }else{
        console.log(edad1 + noEs);
    }
}

let edad2 = "17";

if (isNaN(edad2)){
    console.log(edad2 + siEs);
}else{
    let resultado = (Number(edad2)>=18) ? (edad2 + siEs) : (edad2+ noEs);
    console.log(resultado);
}

