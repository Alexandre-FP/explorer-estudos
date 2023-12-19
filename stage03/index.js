const pessoa = {
    nome: "Alexandre",
    idade: 22,
    endereco: {
        rua: "professor carmo cascardo",
        numero: 84,
    }
}

const pessoaDois = {
    ...pessoa,
    nome: "Sky",
}

console.log(JSON.stringify(pessoaDois, null, 2));