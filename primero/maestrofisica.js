const {maestro}=require('./maestro')
class maestrofisica extends maestro{
    constructor(materia,promedio,antiguedad){
        console.log("se creo maestrofisica");
        super(materia,promedio)
        this.antiguedad=antiguedad
    }
    //Override a metodo del SuperClase
    calcularPromedio(){
      let suma=0
      for (var i = 0; i < this.promedio.length; i++) {
        suma=suma+this.promedio[i]
      }
      console.log("El promedio de fisica es: "+suma/this.promedio.length)
    }
}
module.exports={
    maestrofisica
}
