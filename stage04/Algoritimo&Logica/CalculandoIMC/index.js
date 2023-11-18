/* 
    Dada uma lista de pacientes, descubra o IMC de cada paciente e imprima

    "Paciente X possui o IMC de: Y"

    Onde X é o nome do paciente e Y é oIMC desse paciente

    Crie uma função para fazer o calculo do IMC

*/
 
const pacientes = [
    {nome: "Alexandre", peso: 60, altura: 1.85},
    {nome: "Fabricio", peso: 70, altura: 1.70},
] 

function imc() {

    const nivel = [
        "Abaixo do peso",
        "Peso normal",
        "Sobrepeso",
        "Obesidade grau 1",
        "Obesidade grau 2",
        "Obesidade grau 3",
      ];

    for(let index in pacientes){
        const result = pacientes[index];
        console.log(result)
        const imc = result.peso / (result.altura * result.altura);

        if (imc >= 39.9) { 
            alert(`Paciente ${result.nome} possui o IMC de: ${imc.toFixed(2)}, seu nivel é: ${nivel[5]}`)
        };

        if (imc >= 34.9) {
            alert(`Paciente ${result.nome} possui o IMC de: ${imc.toFixed(2)}, seu nivel é: ${nivel[4]}`) 
        };

        if (imc >= 29.9) {
            alert(`Paciente ${result.nome} possui o IMC de: ${imc.toFixed(2)}, seu nivel é: ${nivel[3]}`)
        };

        if (imc >= 24.9) { 
            alert(`Paciente ${result.nome} possui o IMC de: ${imc.toFixed(2)}, seu nivel é: ${nivel[2]}`);
        };

        if (imc >= 18.5) {  
            alert(`Paciente ${result.nome} possui o IMC de: ${imc.toFixed(2)}, seu nivel é: ${nivel[1]}`);
        };
        if (imc < 18.5)  { 
            alert(`Paciente ${result.nome} possui o IMC de: ${imc.toFixed(2)}, seu nivel é: ${nivel[0]}`); 
        };   
 
    }

}

imc()
