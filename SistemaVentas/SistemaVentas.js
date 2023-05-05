class Producto {
    static contadorProductos = 0;
    constructor(nombre, precio) {
        this._idProducto = ++Producto.contadorProductos;
        this._nombre = nombre;
        this._precio = precio;
    }

    get idProducto() {
        return this._idProducto;
    }

    get nombre() {
        return this._nombre;
    }

    set nombre(nombre) {
        this._nombre = nombre;
    }

    get precio() {
        this._precio
    }

    set precio(precio) {
        return this._precio = precio;
    }

    toString() {
        return `[idProducto: ${this._idProducto},| Nombre: ${this._nombre},| Precio: ${this._precio}]`;
    }
}


class Orden{
    static contadorOrdenes = 0;
    static get MAX_PRODUCTOS(){
        return 5;
    }

    constructor(){
        this._idOrden = ++Orden.contadorOrdenes;
        this._productos = [];
        this._contadorProductosAgregados = 0;
    }

    get idOrden(){
        return this._idOrden;
    }

    agregarProducto(producto){
        if(this._productos.length < Orden.MAX_PRODUCTOS){
            this._productos.push(producto);
        }else{
            console.log('No se pueden agregar mas productos!')
        }
    }

    calcularTotal(){
        let totalVenta = 0;
        for(let producto of this._productos){
            totalVenta += producto._precio; 
        }
        return totalVenta;
    }
     

    mostrarOrden(){
        let procductosOrden = '';
        for(let producto of this._productos){
            procductosOrden += producto.toString() + '\n';
        }
        console.log(`Orden: ${this._idOrden} Total: ${this.calcularTotal()} \nProductos:\n${procductosOrden}`)
    }
}

let producto1 = new Producto('Camisa',2000)
let producto2 = new Producto('Boxer',2000)
let orden1 = new Orden();
orden1.agregarProducto(producto1)
orden1.agregarProducto(producto2)
orden1.mostrarOrden()