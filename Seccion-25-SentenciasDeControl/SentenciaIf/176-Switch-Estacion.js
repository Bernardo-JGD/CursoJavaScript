let numEstacion = 3;

let mensaje = "Estación desconocida";

switch (numEstacion){

    case 1: 
        mensaje = "Privamera";
    break;

    case 2: 
        mensaje = "Verano";
    break;

    case 3: 
        mensaje = "Otoño";
    break;

    case 4: 
        mensaje = "Invierno";
    break;

    default: 
        mensaje = "Caso no encontrado";
    break;

}

console.log(mensaje);