let tec = ["html", "css", "js"];
let tecNo = ["html", "css", "js"];

// adicionar um item no fim do array
tec.push("nodejs");

// adicionar um item no começo do array
tec.unshift("sql");

// remover do fim do array
tec.pop();

// remover do começo do array
tec.shift()

// pegar somente alguns elementos do array
console.log(tecNo.slice(1, 3)) // primeiro argumento qual indice deve começar e segundo onde termina

// remover 1 ou mas items em qualquer posição do array
tec.splice(1, 1);

//encontrar a posição de um elemnto no array
let index = tec.indexOf('html');
tec.splice(index, 0); // excluido o que procurava

console.log(index);