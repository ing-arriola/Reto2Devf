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
      console.log("Los metros metros cuadrados del terreno son: "+this.largoTerreno*this.anchoTerreno+" m2")
    }
    direccionConstruccion(){
      console.log("La direccion es: "+this.direccion);
    }
    setDireccion(dir){
      this.direccion=dir
    }
}
module.exports={
    construccion
}
