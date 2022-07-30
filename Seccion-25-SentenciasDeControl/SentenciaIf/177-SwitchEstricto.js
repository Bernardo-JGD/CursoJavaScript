let variable = "a";

//El switch aquí realiza la evaluación estricta del tipo y el valor que contiene
switch(variable){

    case 1:
        console.log("Numero uno");
    break;
    
    case "1":
        console.log("Texto uno");
    break;

    case "a":
        console.log("Letra a");
    break;

    default: 
        console.log("No es un número");
    break;

}