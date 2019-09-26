const {bebida}=require('./bebida')
class refresco extends bebida{
    constructor(ml,azucar){
        super(ml)
        console.log("se creo el fresco");
        this.azucar=azucar
    }
    
}
module.exports={
    refresco
}
