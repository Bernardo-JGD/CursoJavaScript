console.log("Funciona");

function sumar(){
    const forma = document.getElementById('forma');
    let operandoA = forma['operandoA'];
    let operandoB = forma['operandoB'];
    //por defecto extrae tipo string, así que se tienen que parsear al tipo númerico deseado
    let resultado = parseInt(operandoA.value)  + parseInt(operandoB.value) ;
    if(isNaN(resultado) ){
        resultado = "La operación no incluye números";
    }
    document.getElementById('resultado').innerHTML = `Resultado: ${resultado}`;
    console.log(`Resultado: ${resultado}`);
}