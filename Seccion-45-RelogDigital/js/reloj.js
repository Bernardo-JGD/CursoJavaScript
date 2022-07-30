const mostrarReloj = () =>{
    let fecha = new Date();
    let hr = formatoHora(fecha.getHours()) ;
    let min = formatoHora(fecha.getMinutes());
    let seg = formatoHora(fecha.getSeconds());
    document.getElementById('hora').innerHTML = `${hr}:${min}:${seg}`;
    
    const meses = ['Ene', 'Feb', 'Mar', 'Abr', 'May', 'Jun', 'Jul', 'Ago', 'Sep', 'Oct', 'Nov', 'Dic'];
    const dias = ['Dom', 'Lun', 'Mar', 'Mie', 'Jue', 'Vie', 'Sab'];
    let diaSemana = dias[fecha.getDay()];
    let dia = fecha.getDate();
    let mes = meses[fecha.getMonth()];
    //getDay() y getMonth() retorna un valor númerico, por lo tanto sirve de indice para 
    //el arreglo respectivo 
    let fechaTexto = `${diaSemana}, ${dia} ${mes}`;
    document.getElementById('fecha').innerHTML = fechaTexto;    

    document.getElementById('contenedor').classList.toggle('animar');
    //Cada segundo se activará y se quitará el borde 
    //classList: recuperamos todas las clases de tipo CSS que se 
    //están aplicando a este elemento HTML
    //toggle: funciona como un interruptor, si lo tiene aplicado lo va a quitar
    //y si no lo tiene aplicado se le aplicará
} 

const formatoHora = (hora) =>{
    if(hora<10)
        hora = '0' + hora;
    return hora;
}

//no ponemos parentesis en mostrarReloj ya que solo pasamos la referencia
setInterval(mostrarReloj, 1000);
