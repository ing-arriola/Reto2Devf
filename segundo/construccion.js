class construccion{
    constructor(numPuertas,numVentanas,numPisos,direccion,altura,largoTerreno,anchoTerreno){
        this.numPuertas=numPuertas
        this.numVentanas=numVentanas
        this.numPisos=numPisos
        this.direccion=direccion
        this.altura=altura
        this.largoTerreno=largoTerreno
        this.anchoTerreno=anchoTerreno
        console.log("cree construccion");
    }
    metrosCuadrados(){
      return "Los metros metros cuadrados del terreno son: "+this.largoTerreno*this.anchoTerreno+" m2"
    }
}
module.exports={
    construccion
}
