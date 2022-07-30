//Función de tipo callback
function imprimir(mensaje){
    console.log(mensaje);
}

function sumar (op1, op2, funcionCallBack){
    let res = op1 + op2;
    funcionCallBack(`Resultado: ${res}`);
    //practicamente llamo una función dentro de otra
    //la de imprimir recibe su parametro aquí
    //cuando llamo la segundo función, pongo de parametro la primera
}

sumar(5, 3, imprimir);

//Podemos utilizar la declaración de una variable y asignarle una función

let imp = function imprimir2(mensaje){
    console.log(mensaje);
}

function sumar2(op1, op2, imprimir){
    let resultado = op1 + op2;
    imprimir(`Resultado: ${resultado}`);
}
sumar2(10, 5, imp);


