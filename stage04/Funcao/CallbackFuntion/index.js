// callback funtion 

function meuNome(nome) { // função callback é chamar de volta, é uma função passada para outra função
    nome();
}

meuNome(
    () => { // function anonima
        console.log("Função Callback");
    }
)