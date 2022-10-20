const fluxoCaixa = [100, -20, -30, 10, -7, -21, -5];


function depositos(fluxoCaixa){
 i=0
 imax = fluxoCaixa.length;
 entrada=0
 saida = 0
 saldo = 0
 contarE = 0
 contarS = 0
    
     while (i<imax) {
        if (fluxoCaixa[i]>=0){
        entrada = entrada + fluxoCaixa[i];
        contarE++;
        } else {
        saida = saida + fluxoCaixa[i];
        contarS++;
        }
        i++;
        }
       
     saldo = entrada + saida

     console.log(`Total de depósitos: ${contarE}`)
     console.log(`Total de retiradas: ${contarS}`)
     console.log(`O valor total do deposito foi de: R$ ${entrada}`)
     console.log(`O valor total retirado foi de: R$ ${saida*-1}`)
     console.log(`O saldo final de sua conta foi positivo no valor de R$ ${saldo}`) 
 }

 depositos(fluxoCaixa)

 