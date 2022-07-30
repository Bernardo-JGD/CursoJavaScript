//Indica que una función regrea una promesa 
//Esto simplifica el uso de promesas
async function miFuncionConPromesa(){
    return "Saludos con promesa y async";
}

miFuncionConPromesa().then(valor=> console.log(valor));