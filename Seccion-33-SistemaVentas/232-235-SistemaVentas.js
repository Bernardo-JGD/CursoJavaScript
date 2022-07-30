class Producto{

    static contadorProductos = 0;

    constructor(nombre, precio){
        this._idProducto = ++Producto.contadorProductos;
        this._nombre = nombre;
        this._precio = precio;
    }
    get idProducto (){
        return this._idProducto;
    }
    get nombre(){
        return this._nombre;
    }
    set nombre(nombre){
        this._nombre = nombre;
    }
    get precio(){
        return this._precio;
    }
    set precio(precio){
        this._precio = precio;
    }

    toString(){
        return this._idProducto + " " + this._nombre + " $" + this._precio;
    }

}


class Orden{
    
    static contadorOrdenes = 0;

    static get MAX_PRODUCTOS(){
        return 5;
    }

    constructor(){
        this._idOrden = ++Orden.contadorOrdenes;
        //Inicializamos un arreglo vacio
        //En el método agregarProductos es donde vamos a agregar productos a este
        this._productos = [];
       // this._contadorProductosAgregado = 0;
    }
    get idOrden(){
        return this._idOrden;
    }
    //Recibimos un producto como parámetro para 
    //poderlo agregar a nuestra orden
    agregarProducto(producto){
        //Pero para poderlo agregar a nuestra orden, primero vamos 
        //a verificar si no hemos superado el máximo de productos
        if(this._productos.length < Orden.MAX_PRODUCTOS){//Accedemos al tamaño del arreglo y comparamos con el método estatico
            //con el método push agregamos el producto al arreglo como parametro del método
            this._productos.push(producto);
            //Esta es otra forma para agregar un nuevo elemento al arreglo
            //this._productos(this._contadorProductosAgregados++) = producto;
        }else{
            console.log("No se pueden agregar más productos");
        }
    }

    calcularTotal(){
        let totalVenta = 0;
        //declaramos la variable que va a iterar cada uno de los elementos del arreglo
        //of
        //arreglo que vamos a recorrer
        for(let producto of this._productos){
            //se suman los precios de cada prodcuto almacenado en el arreglo
            totalVenta += producto.precio;
        }
        return totalVenta;
    }

    mostrarOrden(){
        let productosOrden = "";
        for(let producto of this._productos){
            productosOrden += "\n{" + producto.toString() + "}";
        }
        console.log("Orden " + this._idOrden + " Total: " + this.calcularTotal() + " Productos: $" + productosOrden);
    }


}
let producto1 = new Producto("Pantalon", 200);
let producto2 = new Producto("Camisa", 100);
console.log(producto1.toString());
console.log(producto2.toString());

//No recibe parámetros
let orden1 = new Orden();
orden1.agregarProducto(producto1);
orden1.agregarProducto(producto2);

orden1.mostrarOrden();
let orden2 = new Orden();
let producto3 = new Producto("Pantalon", 50);

orden2.agregarProducto(producto3);
orden2.agregarProducto(producto1);
orden2.agregarProducto(producto2);
orden2.agregarProducto(producto3);
orden2.agregarProducto(producto1);
orden2.agregarProducto(producto2);
orden2.mostrarOrden();


