/* 
    Capture 10 items para compor a lista de um supermercado
    Apos capturar os 10 items, imprima-os, separando por virgula

    - Organização e gerenciamento dos dados
    - Melhor eficiencia do código

        Manipulçao de variaveis
    - variaveis criadas dentro do scopo local nao são enxergadas fora desse scopo
    - variaveis criadas fora do scopo são enxergadas dentro do scopo

    [] Etrutura de repetição
        - laço de repetição
        - for(){}
    [] Vetores (Arrays)
        [] Tipo de dado estrutura
    [] incremento: o valor + 1
    [] Tipo de dado: undefined === não existe ou não é definido

*/
function minhaLista(){

    let itemLista = []

    for(let item = 0; item < 10; item++){
        let nomeLista = prompt(`Adicionar mais um item na lista ${+ (item + 1)}`);  
        itemLista[item] = nomeLista
    }
     
    return alert(`Seus items de compras são ${itemLista.join(", ")}`);
} 

minhaLista(); 
 
