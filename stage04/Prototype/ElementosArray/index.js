// contar elementos de um array

const meuArray = [
    'a', 
    {type: "array"}, 
    function(){ return "alo" }
];

console.log(meuArray[1].type);
console.log(meuArray[2]()); // chamando minha function que esta dentro do meu arrays e fechando os pareteses()
console.log(meuArray.length);