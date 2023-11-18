const screen1 = document.querySelector(".screen1");
const screen2 = document.querySelector(".screen2");
let numeroAleatorio = Math.ceil(Math.random() * 10); 
const btnUm = document.querySelector("#btnUm");
const btnDois = document.querySelector("#btnDois");

let tentativas = 1;

function handleUm(event) {
event.preventDefault()

    const number = document.querySelector("#number");
    console.log(number.value); // todos input que eu quiser pegar os valores eu coloco .value
    
    if(Number(number.value) == numeroAleatorio){   
        toggle()
        screen2.querySelector(".screen2 h2").innerText = `acertou em ${tentativas} tentativas!`
    }
    
    number.value = ""
    tentativas++  
}

function handleDois() {
    toggle()
    let tentativas = 1;
    numeroAleatorio = Math.ceil(Math.random() * 10); 
}

// função callback
btnUm.addEventListener('click', handleUm);
btnDois.addEventListener('click',  handleDois);

function toggle(){
    screen1.classList.toggle("hide");
    screen2.classList.toggle("hide");
}