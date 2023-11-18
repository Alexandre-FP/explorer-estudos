// Escopo determina a visibilidade de alguma variável no JS

// Declaração de bloco === Block-scoped

{
    const x = 0
    // console.log(x)
}

// Var
// var é global e poderá funcionar fora de um escopo de bloco, hosting(eleva)
// hosting(eleva) acontece da seguinte forma de baixo dos pano
    var y;
    console.log('> existe y antes do bloco?', y);
{
    y = 0
}

    console.log('> existe y depois do bloco?', y);