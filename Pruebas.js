const {maestromusica}=require('./primero/maestromusica')
const {maestrofisica}=require('./primero/maestrofisica')
const {casa}=require('./segundo/casa')
const {edificio}=require('./segundo/edificio')
const {soda}=require('./tercer/soda')
const {lavadora}=require('./cuarto/lavadora')
const maestros =[new maestromusica('musica',[5,8,10,9,15],35),new maestrofisica('fisica',[10,9,8,7,5,6,9,7],30)]
const casitaUno = new casa(4,6,2,"Col. Esacalon, Psje 123, #52, San Salvador",10,10,15)
const edificioUno= new edificio(30,20,10,"Col. Escalon, Psje 5, #52, San Salvador",100,50,60,20)
const cocaCola= new soda(500,true)
const lava=new lavadora(500,"blanco","30lb",50)
/* SI NO HUBIERA USADO ARREGLO TENDRIA QUE HABER DEFINIDO MAESTRO POR MAESTRO
const jose = new maestrofisica('fisica',[10,9,8,7,5,6,9,7],30)
const juan = new maestromusica('musica',[5,8,10,9,15],35)
console.log(chepe)
console.log("el promedio de fisica es: "+jose.calcularPromedio())
console.log(juancho)
console.log("el promedio de musica es: "+juan.calcularPromedio())*/
console.log("el promedio de musica es: "+maestros[0].calcularPromedio())
maestros[1].calcularPromedio()//Esta clase ha sobre-escrito (Override) el metodo de maestro
casitaUno.metrosCuadrados()
casitaUno.direccionConstruccion()//Llamada a direccion de la casita :)
casitaUno.setDireccion("Col. Medica, Psje 3, #41, Santa Ana")
casitaUno.direccionConstruccion()//Verificando cambio de direccion
edificioUno.metrosCuadrados()
cocaCola.tomar(50)
lava.setConsumoEnergetico(80)
lava.precioFinal()
