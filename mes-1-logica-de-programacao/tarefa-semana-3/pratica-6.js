// method - includes()

const seriados = ["Breaking Bad", "Game of Thrones", "Stranger Things", "Chernobyl", "Dexter", "The Last Dance", "This is Us"];

const busca = "Th";
const resposta=[];

function listaSeries(seriados, busca){
    i=0
    imax = seriados.length;
    
     while (i<imax) {
        if(seriados[i].includes(busca)){
        resposta.push(seriados[i]);
        }
 
     i++;
     }
     return resposta
 }
 
 console.log(listaSeries(seriados, busca))