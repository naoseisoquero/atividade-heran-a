/*const Veiculo = require('./script'); 

class Moto extends Veiculo {
    constructor(cilindrada, rodas, velocidade, modelo, cor){
        super(velocidade, modelo, cor);
        this.cilindrada = cilindrada;
        this.rodas = rodas;
    }
}

const ninja = new Moto(500, 2, 150, 'ninja', 'azul', 1 );
ninja.acelera()
ninja.acelera()
console.log(ninja.acelera())
*/
const Veiculo = require ('./script')
class barco extends Veiculo{
    constructor(turbinas , velocidade, modelo, cor, helices ){
        super(velocidade, modelo, cor, helices);
        this.turbinas =  turbinas;
    }
}
const lancha = new barco(4, 80, "lancha", "branca");
lancha.acelera()

 
