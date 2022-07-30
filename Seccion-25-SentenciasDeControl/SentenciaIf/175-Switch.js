let numero =3;

let mensaje = "Entrada no valida";

switch (numero){
    case 1: 
        mensaje = "numero uno";
    break; 

    case 2: 
        mensaje = "Numero dos";
    break;

    case 3: 
        mensaje = "Numero tres";
    break;

    case 4: 
        mensaje ="Numero cuatro";
    break;

    case 5: 
        mensaje ="Numero cinco";
    break;

    default: 
        mensaje = "Caso no encontrado";
    break;
}

console.log(mensaje);