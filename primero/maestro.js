class maestro{
    constructor(materia,promedio){
        console.log("cree Super Clase maestro");
        this.materia=materia
        this.promedio=promedio
    }
    calcularPromedio(){
      let suma=0
      for (var i = 0; i < this.promedio.length; i++) {
        suma=suma+this.promedio[i]
      }
      return suma/this.promedio.length
    }
}
module.exports={
    maestro
}
