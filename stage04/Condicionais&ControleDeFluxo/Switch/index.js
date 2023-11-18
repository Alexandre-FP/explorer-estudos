// switch

let expression = 'c'

switch(expression){ // condição
    case 'a':
        // codigo
        console.log('a')
        break;
    case 'b':
        console.log('b')
        break;
    default:
        console.log('Nem uma das expressao')
        break;
}

console.log('**********************************************************************************');

function calcula(n1, operador, n2) {
    let result = 0;

    switch(operador){ 
        case '+':
            result = n1 + n2
             break;
        case '-':
            result = n1 - n2
            break;
        case '*':
            result = n1 * n2
            break;
        case '/':
            result = n1 / n2
            break;
        default:
            console.log('Não implementado')
            break;
       
    }    
    return result;
}

console.log(calcula(2, '*' , 2));