/* 
    Jodo da advinhação

    Apresente a mesagem ao usuário:
    "Advinhe o número que estou pensando? Está entre 0 e 10"

    Crie uma lógica para gerar um número aleatório e verificar se o número digitado é o mesmo que o aleatório
    gerado pelo sistema.

    Enquanto o usuario não advinhar o número, mostrar a mensagem:
    "Erro, tente novamente"

    Caso o usuario acerte o numero, apresentar a mensagem:
    "Parabens! Voce advinhou o numero em x tentativas"

    Substitua o "x" da mensagem, pelo número de tentativas

    [] Controlar o fluxo da aplicação
    [] Etrutura de repetição
        [] while
    [] Gerar número aleatório
    [] Tipo de dado: NaN
        - não é um número
    [] Tipo de erro: SyntaxError
        - error de escrita do código
    [] Math
        - pacote com funcionalidade matematicas
        - Math.random()
        - Math.ceil()
        - Math.floor()
        - Math.round()
    [] Template litarals ou Template strings
        - interpolação de dados
*/ 

// minha solução
function advinharNumero() {
    
    let numeroAleatorio = parseInt(Math.ceil(Math.random() * 10)); 
    let capturarNumero;
    
    for(let i = 0; i < numeroAleatorio; i++){
        capturarNumero = parseInt(prompt(`Advinhe o número que estou pensando? Está entre 0 e 10`));
        numeroAleatorio[i] = capturarNumero; 

        if(capturarNumero === numeroAleatorio){
            alert(`Parabens! Voce advinhou o número, foi ${+ (i + 1)} tentativas`);  
        }
        else if(capturarNumero !== numeroAleatorio){
            alert(`Erro, tente novamente`);  
        } 
    }

 
} 

function solucaoRock(){
    let capturarNumero = prompt(`Advinhe o número que estou pensando? Está entre 0 e 10`);
    const numeroAleatorio = Math.ceil(Math.random() * 10); 

    let tentativas = 1;

    while(Number(capturarNumero) != numeroAleatorio){  
        capturarNumero = prompt("Erro, tente novamente"); 
        tentativas++ 
    }

    alert(`Parabens! Voce advinhou o número, foi ${tentativas} tentativas`);
}


solucaoRock();
