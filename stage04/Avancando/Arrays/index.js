const animal = [
    "Leaos", "Zebras", "Gato", {
        nome: "Sky",
        idade: 5
}];

for(let i = 0; i < animal.length; i++){
    console.log(animal[i]); // listando os valores do meu array
};

console.log(animal[3].nome); // acessando um valos especifico do meu array e dentro do array o objeto que quero acessar