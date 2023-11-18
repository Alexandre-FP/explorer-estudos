// transformando uma cadeia de caracteres em elementos de um array

let frase = "manipulação";
let novoArray = Array.from(frase); // é usado para criar um novo array a partir de um objeto iterável
let listaElementos = [];

function listaArray() {
    for(let i = 0; i < novoArray.length; i++){
        listaElementos.push(novoArray[i]);
    }
}

listaArray();
let arrayNovo = listaElementos.splice(" ");
console.log(arrayNovo.join('').toUpperCase());


