const ingresos = [
    new Ingreso('Salario', 2100.00),
    new Ingreso('Venta coche', 1500.00),
];

const egresos = [
    new Egreso ('Renta departamento', 900),
    new Egreso ('Ropa', 400)
];

//esta funcion va a estar refrescando dinámicamente los 3 primeros
//datos de la página
let cargarApp = () =>{
    cargarCabecero();
    cargarIngresos();
    cargarEgresos();
}

let totalIngresos = () =>{
    let totalIngreso = 0;
    for(let ingreso of ingresos){
        totalIngreso += ingreso.valor;
    }
    return totalIngreso;
}

let totalEgresos = () =>{
    let totalEgreso = 0;
    for(let egreso of egresos){
        totalEgreso += egreso.valor;
    }
    return totalEgreso;
}

let cargarCabecero = () =>{
    let presupuesto = totalIngresos() - totalEgresos();
    let porcentajeEgreso = totalEgresos()/totalIngresos();
    document.getElementById('presupuesto').innerHTML = formatoMoneda(presupuesto) ;
    document.getElementById('porcentaje').innerHTML = formatoPorcentaje(porcentajeEgreso)  ;
    document.getElementById('ingresos').innerHTML = formatoMoneda (totalIngresos()) ;
    document.getElementById('egresos').innerHTML = formatoMoneda(totalEgresos()) ;
}

const formatoMoneda = (valor) =>{
    //'en-US' es el idioma, puede ser personalizable, este es inglés
    //el segundo parámetro es un objeto
    //style:'currency' --- formato de moneda
    //currency:'USD' --- tipo de moneada, en este caso dolares
    //minimumFractionDigits: 2 --- minimo de digitos para la parde de los centavos, en este caso 2
    return valor.toLocaleString('en-US', {style:'currency', currency:'USD', minimumFractionDigits: 2});
    //return valor.toLocaleString('es-ES', {style:'currency', currency:'EUR', minimumFractionDigits: 2}); -- Euros
    //return valor.toLocaleString('es-MX', {style:'currency', currency:'MNX', minimumFractionDigits: 2}); -- Euros
}

const formatoPorcentaje = (valor) =>{
    return valor.toLocaleString('en-US', {style:'percent', minimumFractionDigits: 2});
}

const cargarIngresos = () =>{
    let ingresosHTML = '';
    for(let ingreso of ingresos){
        ingresosHTML += crearIngresosHTML(ingreso);
    }
    document.getElementById('lista-ingresos').innerHTML = ingresosHTML;
}

const crearIngresosHTML = (ingreso) =>{
    let ingresoHTML = `
    <div class="elemento limpiarEstilos">
        <div class="elemento_descripcion">${ingreso.descripcion}</div>
            <div class="derecha limpiarEstilos">
                <div class="elemento_valor">+ ${formatoMoneda(ingreso.valor)}</div>
                    <div class="elemento_eliminar">
                        <button class="elemento_eliminar--btn">
                            <ion-icon name="close-circle-outline"
                            onclick='eliminarIngreso(${ingreso.id})'></ion-icon>
                        </button>
                    </div>
            </div>
    </div>
    `;
    return ingresoHTML;
}

const eliminarIngreso = (id) =>{
    let indiceEliminar = ingresos.findIndex(ingreso => ingreso.id === id);
    //for(let ingreso of ingresos)
    ingresos.splice(indiceEliminar, 1);
    //splice(indiceABuscar, cantidadDeElementosAEliminar)
    //En el primer parámetro es el indice que queremos encontrar para eliminar,
    //en el segundo es la cantidad de elementos que queremos eliminar a partir de ese indice en adelante
    cargarCabecero();//Cargamos estas dos funciones para refrescar la pantalla y que se noten los cambios al eliminar los elementos
    cargarIngresos();
}

const cargarEgresos = () => {
    let egresosHTML = '';
    for (let egreso of egresos){
        egresosHTML += crearEgresos(egreso);
    }
    document.getElementById('lista-egresos').innerHTML = egresosHTML;
}

const crearEgresos = (egreso) =>{
    let egresoHTML = `
    <div class="elemento limpiarEstilos">
        <div class="elemento_descripcion">${egreso.descripcion}</div>
            <div class="derecha limpiarEstilos">
                <div class="elemento_valor">- ${formatoMoneda(egreso.valor)}</div>
                    <div class="elemento_porcentaje">${formatoPorcentaje(egreso.valor/totalEgresos()) }</div>
                        <div class="elemento_eliminar">
                            <button class="elemento_eliminar--btn">
                                <ion-icon name="close-circle-outline"
                                onclick='eliminarEgreso(${egreso.id})'></ion-icon>
                            </button>
                        </div>
            </div>
    </div>
    `;
    return egresoHTML;
}

let eliminarEgreso = (id) =>{
    let indiceEliminar = egresos.findIndex(egreso => egreso.id === id);
    egresos.splice(indiceEliminar, 1);
    cargarCabecero();
    cargarEgresos();
}

/*onclick='eliminarEgreso(${egreso.id})'
${egreso.id} esto identifica el id pero no el indice, pero a partir de ahí se hace la busqueda en la siguiente funcion
let indiceEliminar = egresos.findIndex(egreso => egreso.id === id);
donde busca la coincidencia y una vez encontrada, de ese elemento toma su indice y se elimina la posición del arreglo original, 
por eso es que el id solo sirve para el usuario final, internamente para eliminar algo lo eliminamos por medio de su indice, no de su id
*/ 

let agregarDato = () =>{
    let forma = document.forms['forma'];
    let tipo = forma['tipo'];
    let descripcion = forma['descripcion'];
    let valor = forma['valor'];
    if(descripcion.value !== '' && valor.value !== ''){
        if(tipo.value === 'ingreso'){
            ingresos.push(new Ingreso(descripcion.value, +valor.value));
            //Number(cadena) y +cadena hacen lo mismo, tranformar una cadena de números en formato string a un formato numérico
            //esto se hace porque el valor proviene de un input text, y pues es una cadena
            cargarCabecero();
            cargarIngresos();
        }else{
            if(tipo.value === 'egreso'){
                egresos.push(new Ingreso(descripcion.value, +valor.value));
                cargarCabecero();
                cargarEgresos();
            }
        }
    }
}

