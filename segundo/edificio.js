const {construccion}=require('./construccion')
class edificio extends construccion{
    constructor(numPuertas,numVentanas,numPisos,direccion,altura,largoTerreno,anchoTerreno,familias){
        super(numPuertas,numVentanas,numPisos,direccion,altura,largoTerreno,anchoTerreno)
        console.log("se creo edificio");
        this.familias=familias
    }
}
module.exports={
    edificio
}
