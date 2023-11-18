/* 
    Solicite 2 números, faça a soma deles
    e apresente o resultado final ao usuário

    Boas praticas na escrita de variaveis

    - Sem espaços ou acentuação especiais no nome
    - Não pode inicial com número
    - camelCase

    [] Tipo de dado: Number
    [] Operador de Matematico
    [] Manipulação de dados
        [] Type conversion (type casting)
    [] Ordem de precedencia de operadores
    [] Group operator
*/


    const numberUm = Number(prompt('Digite um número'));
    const numberDois = Number(prompt('Digite outro número'));

    const result = numberUm + numberDois;

    alert(`O resultado da operação é ${result}`);  

 