/* 
    Perguntas a serem feitas

    1. Quais os dados de entrada que terei (inputs)
    2. Quais as variaveis?
    3. Qual o caminho ideal? (fluxo ideal)
    4. Quais(is) o(s) caminho(s) alternativo(s)? (fluxo alternativos)
    5. Quais tratamentos de dados preciso fazer? (estrutura de dados, função)
    6. Quais é a saida, ou quais os dados de saida, esperada? (outputs)

*/ 

/*     Atividade  

    Faça um programa que tenha um menu e apresente a seguinte mensage:

    Olá usuario! Digite o número da opção desejada

        1. Cadatrar um item na lista
        2. Mostrar itens na lista
        3. Sair do programa

*/

function usuario(){

    let opcao;
    let items = [];

    while(opcao != 3){

    opcao = Number(prompt(`
    Olá usuario! Digite o número da opção desejada

    1. Cadatrar um item na lista
    2. Mostrar itens na lista 
    3. Sair do programa`)) 


        switch(opcao){
            case 1:
                let item = prompt("Digite o nome do item");
                items.push(item)
                break;
            case 2:
                if(items.length == 0){  
                    alert("Não existem itens cadastrados");
                }else{
                    alert(items) 
                }
                break;
            case 3:
                alert('Tchau');
                break;
            default: 
                alert("Nem uma das opções selecionadas");
                break;
        }


        // Primeira solução com if else
    //     if(opcao == 1){
    //         let item = prompt("Digite o nome do item");
    //         items.push(item)
    //     }

    //     else if(opcao == 2){
    //         if(items.length == 0){  
    //             alert("Não existem itens cadastrados");
    //         }else{
    //             alert(items) 
    //         }
    //     } else{
    //         alert("Tchau") 
    //     }

    } 
 
} 

usuario(); 