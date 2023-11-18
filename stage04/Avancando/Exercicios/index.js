let peso;
console.log(typeof(peso)); // undefined

/* ********************************************************************************************* */

let nome = "Alexandre";
let idade = 22;
let escrito = true;

/* ********************************************************************************************* */

const pessoa = {
    nome: "Alexandre",
    idade: 22,
    peso: 60.1,
    escrito: true,
};

console.log(`${pessoa.nome} tem ${pessoa.idade} e pesa ${pessoa.peso}Kg`);

/* ********************************************************************************************* */

let estudante = [];

estudante = [
    pessoa,
];

console.log(estudante[0]);

/* ********************************************************************************************* */
const alexandre = {
    nome: "Sky",
    idade: 5,
    peso: 35.1,
    escrito: false,
};

estudante[1] = alexandre;
console.log(estudante);


