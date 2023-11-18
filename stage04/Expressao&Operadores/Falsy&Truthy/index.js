/*
    Type conversion (typecasting) vs Type coersion

*/

// console.log(Number('9') + 6);

/* 
    FALSY
    Quando um valor é considerado false em contextos onde um booleano é obrigatorio (condicionais e loops)

    false
    0
    -0
    ""
    null
    undefined
    NaN
*/

console.log( null ? "verdadeiro" : "falso" );


/*

    TRUTHY
    Quando um valor é considerado false em contextos onde um booleano é obrigatorio (condicionais e loops)

    true
    {}
    []
    1
    3.23
    "0"
    "false"
    -1
    Infinity
    -Infinity
*/

console.log( {} ? "verdadeiro" : "falso" );
