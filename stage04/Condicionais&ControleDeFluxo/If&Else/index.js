// if....else, sempre que eu quiser mudar o fluxo da minha aplicação o if e else é muito importante

let temperatura = 37.6;
let altaTemperatura = temperatura >= 37.5;
let mediaTemperatura = temperatura < 37.5 && temperatura >= 37;

if(altaTemperatura){
    console.log('Essa pessoa está com febre alta');
} else if(mediaTemperatura){
    console.log('Essa pessoa está com febre moderada');
} else { 
    console.log('Pessoa Saudavel');
} 