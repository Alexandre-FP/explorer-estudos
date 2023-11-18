/* 
    Solicitar o nome do aluno e as 3 notas
    do bimestre calcular a média daquele aluno

    A média positiva deverá ser maior que 6

    fazer média, pegar total de números de nota e dividir total de nota

    Se o aluno passou no bimestre, dar os parabés.

    Se o aluno não passou no bimestre,
    motivar o aluno e dar seu melhor na prova de recuperação

    Em ambos os casos, mostre um mensagem com o nome do aluno e a nota

    Boas práticas na programação

    - Não repetir código

    Fluxo da aplicação

    - Caminhyo lógicos baseado em algum dado ou informação
    [] Tipo de dado: Boolean (true | false)
    [] if/else
    [] Operadores Comparativos ou Logicos
        - > maior que
        - < menor que
        - >= maior ou igual a
        - <= menor ou igual a
        - == igual a
        - != diferente de
*/

function calculeMedia() {
    const nomeAluno = prompt('Qual o nome do(a) aluno(a)?');
    const notaUm = Number(prompt('Qual nota da primeira prova?'));
    const notaDois = Number(prompt('Qual nota da segunda prova?'));
    const notaTres = Number(prompt('Qual nota da terceira prova?'));
    
    const result = (notaUm + notaDois + notaTres) / 3
    const resultForm = result.toFixed(2)
    
    if(result >= 6){
        alert(`Parabéns ${nomeAluno} você passou de ano, sua média é ${resultForm}`);
    } else if(result < 6){
        alert(`Se esforçe mas na prova de recuperação ${nomeAluno}, sua média é ${resultForm}`);
    }
}

calculeMedia();







