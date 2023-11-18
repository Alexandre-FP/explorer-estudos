/* 
    Capturar 2 números
    e fazer as operações matematicas de soma
    subtração, multiplicação, divisão e resto
    da divisão

    E para cada operação, mostrar um alerta com o resultado
    [] operadores matematicos

*/

function result() {
    const numberUm = Number(prompt('Digite um número'));
    const escolhaOperador = prompt('Digite um operador');
    const numberDois = Number(prompt('Digite outro número'));

    const result = calcula(numberUm, escolhaOperador, numberDois);

    return alert(`O resultado da operação é ${result}`);  
}
  
function calcula(numberUm, operador, numberDois) {
    let result = 0;

    switch(operador){ 
        case '+':
            result = numberUm + numberDois
             break;
        case '-':
            result = numberUm - numberDois
            break;
        case '*':
            result = numberUm * numberDois
            break;
        case '/': 
            result = numberUm / numberDois
            break;
        case '%': 
            result = numberUm % numberDois
            break;
        default:
            alert('Operador não implementado');
            break;
       
    }    
    return result;
}
 
result();