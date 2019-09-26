const {electrodomestico}=require('./electrodomestico')
class lavadora extends electrodomestico{
    constructor(precio, color,capacidad,carga){
        super(precio, color,capacidad)
        console.log("se creo la Lavadora :o");
        this.carga=carga
    }
    precioFinal(){
      console.log("El precio es: "+this.getConsumoEnergetico()*this.carga);
    }
}
module.exports={
    lavadora
}
