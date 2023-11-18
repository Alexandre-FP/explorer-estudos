/* 
    Crie uma lista de pacientes 

    Cada paciente dentro da lista deverá conter
        nome
        idade
        peso
        altura

    Escreva uma lista contendo o nome dos pacientes, idades, peso e alturea

    [] Estrutura de dados: objetos
        [] object leteral
        [] for..of literar por arrays
        [] for..in literar sobre objetos
*/  

const pacientes = [
    { nome: 'Alexandre', idade: 22, peso: 60, altura: 1.85},
    { nome: 'Fabricio', idade: 28, peso: 78, altura: 1.75}
]

let pacienteController = []
 
for(let p of pacientes){ 
    pacienteController.push(p.nome);   
    pacienteController.push(p.idade);   
    pacienteController.push(p.peso);   
    pacienteController.push(p.altura);    
} 

alert(pacienteController.join(", ")); 
