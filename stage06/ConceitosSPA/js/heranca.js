class Passaro {
    voar() {
        console.log('Voando')
    }
}

class Pato extends Passaro{
    constructor(){
        super() // com a palavra super estou fazendo com que eu herdo tudo que esta na class Passaro
    }

    voar(){ // Polimorfismo mudando o method sobreescrevendo esse method
        console.log('Pato nao voa') 
    }
}

const p = new Pato()
console.log(p.voar())