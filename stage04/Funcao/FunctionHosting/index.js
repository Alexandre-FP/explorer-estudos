// function hosting
euNomeDois();
meuNome();

function meuNome() { // function criadas dessa maneira tambem acontece o hosting(eleva)
    console.log("Alenxadre");
}

// dessa forma é diferente, const é declarado depois que é chamado a função meuNome() na linha 2
// entao meuNome() para o js nao existe
const meuNomeDois = function() {
    console.log("Alenxadre");
} 

