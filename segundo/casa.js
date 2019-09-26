const {construccion}=require('./construccion')
class casa extends construccion{
    constructor(numPuertas,numVentanas,numPisos,direccion,altura,largoTerreno,anchoTerreno){
        console.log("se creo casa");
        super(numPuertas,numVentanas,numPisos,direccion,altura,largoTerreno,anchoTerreno)
    }
    
}
module.exports={
    casa
}
