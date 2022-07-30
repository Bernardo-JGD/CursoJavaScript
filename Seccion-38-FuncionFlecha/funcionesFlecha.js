//Esta es la manera clásica de trabajar con funciones

/*miFuncion();//puedo llamar la función antes de declararla

function miFuncion(){
    console.log("Saludos desde mi funcion");
}
*/ 

//Podemos declarar una variable y asignarle una función
let miFuncion = function(){
    console.log("Saludos desde mi función");
}

//para declara una función flecha se hace de la siguiente manera

//declaramos una variable, despues = (argumentosPosibles) => {cuerpo de la funciuón}

/*const miFuncionFlecha = () =>{
    console.log("Saludos desde mi función flecha");
}

miFuncionFlecha();*/
//No podemos llamar a la función flecha antes de haberla declarado usandola como variable

//en vez de usar "let" podemos usar "const", la diferencia es que podemos volver a usar el nombre de la variable
//y asignarle un nuevo valor o función, y con const no


//podemos declara una función flecha en una sola línea
//let funcionFlecha = () => console.log("Saludos desde mi función flecha");


const flechaConRetorno = () =>{
    return "Esta función hace un retorno con este mensaje";
}

console.log(flechaConRetorno());

//Podemos retornar en una sola línea también
const flechaConRetorno2 = () => "Retorno de una sola línea sin la palabra return";
console.log(flechaConRetorno2());

//Podemos retornar objetos también en una sola línea de la siguiente manera
const flechaRetornoObjeto = () => ({nombre: "Panda", apellido: "Rojo", edad: "300"});
//Como puede haber confunción con las llaves para la creación de un objeto,
//la función se cierra con paréntesis y punto y coma
console.log(flechaRetornoObjeto());

//Para recibir parámetros lo hacemos de la siguiente manera
const flechaConParametros = (mensaje) => {console.log(mensaje);}
flechaConParametros("Función flecha con parámetros"); 
//la forma clásica de hacer esto es la siguiente
const funcionClasicaParametros = function(mensaje){
    console.log(mensaje);
}
funcionClasicaParametros("Funcion clásica");

//Si usamos flecha y solo enviamos un parámetro, podemos omitir unos paréntesis

const flechaUnParametro = mensaje => console.log(mensaje);
flechaUnParametro("Flecha con un solo parametro, sin parentesis");

//Para enviar varios parametros podemos hacerlo de la siguiente manera
const flechaVariosParametros1 = (op1, op2) => op1 + op2;//puede ser sin llaves
console.log(flechaVariosParametros1(5, 3));

const flechaVariosParametros2 = (op1, op2) =>{//pero para usar llaves tenemos que usar return 
    let resultado = op1 + op2;
    return `Resultado: ${resultado}`;
};
console.log(flechaVariosParametros2(10, 5));