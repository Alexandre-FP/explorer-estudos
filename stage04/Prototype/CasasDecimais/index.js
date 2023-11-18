//  Transforma um número quebrado com 2 casas decimais e trocar ponto por virgula

const meuNumero = 584530.252453
console.log(meuNumero.toFixed(2).replace(".", ",")); // arredondamento e trocando o ponto por virgula, mas fazendo isso minha variavel meuNumero vira um dado tipo String