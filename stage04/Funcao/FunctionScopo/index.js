// function scope
let obj = 'criar video';

function criarPensamento(obj) {
    obj = 'estudo'; // esse obj criado na linha 5 não é a mesma coisa que o obj da linha 2
    return obj;
}

console.log(obj);
console.log(criarPensamento(obj)); 