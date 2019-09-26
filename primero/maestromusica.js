
const {maestro}=require('./maestro')
class maestromusica extends maestro{
    constructor(materia,promedio,edad){
        console.log("se creo maestromusica");
        super(materia,promedio)
        this.edad=edad
    }
}
module.exports={
    maestromusica
}
