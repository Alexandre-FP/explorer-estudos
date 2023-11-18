/*
    Function() constructor

    *expressão new
    *criar um novo objeto
    *this keyword
*/

function Pessoa(nome) { //Function() constructor
    this.nome = nome // this é falar pro JS que é isso aqui que estou me referindo
    this.andar = function() {
        return `${ this.nome } está andando`;
    }
};

const alexandre = new Pessoa('Alexandre'); // instancia o objeto
console.log(alexandre.andar());
