/* Separe um texto que contem espaços, em um novo array onde cada texto é uma posição do array. Depois disso, tranforme o array em um texto e onde eram espaços, coloque _ */

let frase = "ola mundo novo"
let meuArray = frase.split(" "); // split faz com que a variavel da linha tres me retorna um novo array

console.log(meuArray.join('_').toUpperCase()); // vai juntar e depois coloco o argumento que eu quero que separe, pode ser espaço, aspas, underline qualquer coisa

