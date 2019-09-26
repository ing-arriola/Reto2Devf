const {bebida}=require('./bebida')
class soda extends bebida{
    constructor(ml,colorante){
        super(ml)
        console.log("se creo la sodita :)");
        this.colorante=colorante
    }
}
module.exports={
    soda
}
