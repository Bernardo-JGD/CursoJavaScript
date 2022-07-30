let mes = 8;
let mensaje ="Error";
//suponiendo que primavera empiece en enero
switch (mes){

    case 1:
    case 2:
    case 3: 
        mensaje = "Primavera";
    break;

    case 4: 
    case 5:
    case 6: 
        mensaje = "Verano";
    break;

    case 7:
    case 8:
    case 9:
        mensaje = "Otoño";
    break;

    case 10:
    case 11:
    case 12:
        mensaje = "Invierno";
    break;

    default: 
        mensaje ="Fuera del rango";
    break;
    

}

console.log(mensaje);