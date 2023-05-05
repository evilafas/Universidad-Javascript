class DispositivoEntrada{
    constructor(tipoEntrada, marca){
        this._tipoEntrada = tipoEntrada;
        this._marca = marca;
    }

    get tipoEntrada(){
        return this._tipoEntrada;
    }
    set tipoEntrada(tipoEntrada){
        this._tipoEntrada = tipoEntrada;
    }

    get marca(){
        return this._marca;
    }

    set marca(marca){
        this._marca = marca;
    }
    
}

class Raton extends DispositivoEntrada{
    static contadorRatones = 0;
    constructor(tipoEntrada,marca){
        super(tipoEntrada, marca)
        this._idRatones = ++Raton.contadorRatones;
    }

    toString(){
        return `ID Raton: ${this._idRatones} \nMarca: ${this.marca} \nTipo de Entrada: ${this.tipoEntrada}`
    }
}

class Teclado extends DispositivoEntrada{
    static contadorTecladoes = 0;
    constructor(tipoEntrada,marca){
        super(tipoEntrada, marca)
        this._idTeclado = ++Teclado.contadorTecladoes;
    }

    toString(){
        return `ID Teclado: ${this._idTeclado} \nMarca: ${this.marca} \nTipo de Entrada: ${this.tipoEntrada}`
    }
}


class Monitor{
    static contadorMonitores = 0
    constructor(marca, tamaño){
        this._idMonitor = ++Monitor.contadorMonitores;
        this._marca = marca;
        this._tamaño = tamaño;
    }

    get Marca(){
        return this._marca
    }
    set Marca(marca){
        this._marca = marca
    }

    get Tamaño(){
        return this._tamaño;
    }
    set Tamaño(tamaño){
        this._tamaño = tamaño;
    }
    
    toString(){
        return `Monitor: ${this._idMonitor} Marca: ${this._marca} Tamaño: ${this._tamaño}`
    }

}

class Computadora{
    static contadorComputadoras = 0
    constructor(nombre,Monitor, Teclado, Raton){
        this._idComputadora = ++Computadora.contadorComputadoras;
        this._nombre = nombre;
        this._monitor = Monitor;
        this._teclado = Teclado;
        this._raton = Raton;
    }

    toString(){
        return `Id Computadora: ${this._idComputadora} 
                \nNombre: ${this._nombre}
                \nMonitor: ${this._monitor}
                \nTeclado: ${this._teclado}
                \nRatón: ${this._raton}`
    }
}

let monitor = new Monitor("HP", 30);
let teclado = new Teclado("USB","ASUS");
let raton = new Raton("USB", "Razor");
let computadora = new Computadora("SuperPC",monitor,teclado,raton);

let monitor2 = new Monitor("Samsung", 10);
let teclado2 = new Teclado("USB","Logitech");
let raton2 = new Raton("USB", "Genius");
let computadora2 = new Computadora("PC2",monitor2,teclado2,raton2);


class Orden{
    static contadorOrdenes = 0;
    constructor(){
        this._idOrden = ++Orden.contadorOrdenes;
        this._computadoras = [];
    }

    get idOrden(){
        return this._idOrden;
    }

    aregarComputadora(computadora){
        this._computadoras.push(computadora)
    }

    mostrarOrden(){
        let computadorasOrden = '';
        for(let computadora of this._computadoras){
            computadorasOrden += `\n${this._computadoras}`;
        }
        console.log(`Orden: ${this._idOrden}, Computadora: ${computadorasOrden}`);
    }
}

let orden1 = new Orden();
let orden2 = new Orden();
orden1.aregarComputadora(computadora)
orden2.aregarComputadora(computadora2)
console.log(orden1.mostrarOrden());
console.log(orden2.mostrarOrden());
