// const e let são locais e só funcionam no scopo onde foi declarada ou criada
// com let e const se estiverem dentro de um bloco só consigo acessar minha variavel dentro do scopo 
{
    let y = 0
    // console.log('> existe y?', y);
}

    // console.log('> existe y depois do bloco?', y); <--- AQUI JÁ ESTA ERRADO(ReferenceError: y is not defined)

//*************************************************************************************************************************** */

    let y = 1
{
    y = 0 // aqui nao foi usada nem let e nem const entao o JS traz o y da linha 12 do scopo anterior
    console.log('> existe y?', y);
}

    console.log('> existe y depois do bloco?', y); 