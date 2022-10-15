
function calculoIMC(peso,altura){
    const imc = peso / (altura*altura)

    if (imc <= 18.5){
        console.log("Abaixo do peso")
    } else if (imc <= 25){
        console.log("Peso normal")
    } else if (imc <= 30){
        console.log("Sobrepeso")
    } else if (imc > 30)
        console.log("Obesidade")
}

calculoIMC(54,1.8)

calculoIMC(64,1.8)

calculoIMC(74,1.8)

calculoIMC(84,1.8)

calculoIMC(94,1.8)

calculoIMC(104,1.8)