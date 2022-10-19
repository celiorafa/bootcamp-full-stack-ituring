function escolhaDia(diaDaSemana){

switch (diaDaSemana) {
        case 1:
        return "Segunda"
        break;

        case 2:
        return "Terça"
        break;

        case 3:
        return "Quarta"
        break;

        case 4:
        return "Quinta"
        break;

        case 5:
       return "Sexta"
        break;

        case 6:
        return "Sábado"
        break;

        case 7:
       return "Domingo"
        break;

    default: return (`O número ${diaDaSemana} não é valido para dia da semana!`)
        break;
}
}

console.log(escolhaDia(1))

console.log(escolhaDia(3))

console.log(escolhaDia(5))

console.log(escolhaDia())