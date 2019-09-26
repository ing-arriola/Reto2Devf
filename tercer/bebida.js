class bebida{
    constructor(ml){
        this.ml=ml
        console.log("Bebida");
    }
    tomar(consumo){
      this.ml=this.ml-consumo
      console.log("Despues del sorbo quedan: "+this.ml);
    }

}
module.exports={
    bebida
}
