function notANumber(value){
    return isNaN(value) || value == ""
}

function IMC(weight, height) {
    return weight / (height * height)
}

export { notANumber, IMC }