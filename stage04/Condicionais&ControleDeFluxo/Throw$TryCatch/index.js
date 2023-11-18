// throw
function meuNome(nome){
    if(nome === ''){
        throw("Nome é necessario"); // mensagem de erro
    }

    return nome;
}

// try catch
try{
    console.log(meuNome('Alexandre'));
}catch(erro){
    console.log(erro);
}