let horaDia = 5;
let resultado;

if(horaDia>=6 && horaDia<=11){
    resultado = "Buenos días";
}else{
    if (horaDia>=12 && horaDia<=18){
        resultado = "Buenas tardes";
    }else{
        if(horaDia>=19 && horaDia<=24){
            resultado = "Buenas noches";
        }else{
            if(horaDia>=0 && horaDia<6){
                resultado = "Duermiendo";
            }else{
                resultado = "Entrada no valida";
            }
        }
    }
}

console.log(resultado);