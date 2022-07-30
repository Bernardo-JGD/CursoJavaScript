for(contador = 0; contador<=10; contador++){

    if(contador%2 !== 0){
        continue;// significa ir a la siguiente iteración
    }
    console.log(contador);
    
}

for(contador = 0; contador <= 10; contador++){
    if(contador%2 !== 0){
        contador ++;//al paracer "continue" funciona igual que incrementar automaticamente la variable de iteración
    }
    console.log(contador);
}