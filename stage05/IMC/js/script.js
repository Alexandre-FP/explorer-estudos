import { Modal } from './modal.js';
import { AlertError } from './alert.js'
import { notANumber, IMC } from './utils.js'

const form = document.querySelector('form')
const inputWeight = document.querySelector('#weight')
const inputHeight = document.querySelector('#height')

form.onsubmit = event => {
    event.preventDefault();

    const weight = inputWeight.value
    const height = inputHeight.value

    const weightOrHeightIsNotANumber = notANumber(weight) || notANumber(height) 

    if(weightOrHeightIsNotANumber){
        AlertError.open()
        return;
    }else{
        AlertError.close()
    }

    const result = IMC(weight, height).toFixed(2);
    resultMensage(result)
}

function resultMensage(result) {
    const message = `Seu IMC é de ${result}`

    Modal.message.innerText = message
    Modal.open()
}

inputWeight.oninput = () => AlertError.close()
inputHeight.oninput = () => AlertError.close()