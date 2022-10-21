const votacao = [1, 1, 1, 4, 4, 2, 3, 2]

function apuracao(votacao){
    i=0
    imax = votacao.length;
    Brasil=0
    Argentina = 0
    Espanha = 0
    Portugal = 0
    Preferido = ""
       
        while (i<imax) {
           if (votacao[i]==1){
               Brasil++;
           } else if (votacao[i]==2) {
                Argentina++;
           } else if (votacao[i]==3) {
            Espanha++;
           } else if (votacao[i]==4) {
            Portugal++;
           }
           i++;
           }

        if (Brasil>Argentina && Brasil>Espanha && Brasil>Portugal){
            Preferido="Brasil";
        } else if (Argentina>Espanha && Argentina>Portugal){
            Preferido="Argentina";
        } else if (Espanha>Portugal){
            Preferido="Espanha";
        } else {
            Preferido="Portugal"
        }

        

    console.log(`Brasil: ${Brasil} voto(s)`)
    console.log(`Argentina: ${Argentina} voto(s)`)
    console.log(`Espanha: ${Espanha} voto(s)`)
    console.log(`Portugal: ${Portugal} voto(s)`)
    console.log(`${Preferido} é o preferido para ganhar a Copa do Mundo!`)
}
apuracao(votacao)