const fluxoCaixa = [100, -20, -30, 10, -7, -21, -5];


function saldoFinal(fluxoCaixa){
 i=0
 imax = fluxoCaixa.length;
 somatoria=0
    
     while (i<imax) {
        somatoria = somatoria + fluxoCaixa[i];
        i++;
        }
       
     return `O saldo final de sua conta foi positivo no valor de R$ ${somatoria}.`
 }
 
 console.log(saldoFinal(fluxoCaixa))
