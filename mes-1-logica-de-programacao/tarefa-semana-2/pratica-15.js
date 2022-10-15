
function calculoIMC(peso,altura){
    const imc = peso / (altura*altura)
    return imc
    
}

function comparar(calculoIMC){
    if (calculoIMC <= 18.5){
        console.log("Abaixo do peso")
    } else if (calculoIMC <= 25){
        console.log("Peso normal")
    } else if (calculoIMC <= 30){
        console.log("Sobrepeso")
    } else if (calculoIMC > 30)
        console.log("Obesidade")
}


comparar(calculoIMC(54,1.8))
comparar(calculoIMC(74,1.8))
comparar(calculoIMC(94,1.8))
comparar(calculoIMC(104,1.8))
