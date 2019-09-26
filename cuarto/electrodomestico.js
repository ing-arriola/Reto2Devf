class electrodomestico{
    constructor(precio, color,capacidad){
        this.precio=precio
        this.color=color
        this.capacidad=capacidad
        this.consumoEnergetico=100
        console.log("Electro");
    }
    setConsumoEnergetico(consu){
      this.consumoEnergetico=consu
    }
    getConsumoEnergetico(){
      return this.consumoEnergetico
    }

}
module.exports={
    electrodomestico
}
