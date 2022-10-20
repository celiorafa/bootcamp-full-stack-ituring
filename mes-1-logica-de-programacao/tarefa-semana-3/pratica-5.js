const seriados = ["Breaking Bad", "Game of Thrones", "Stranger Things", "Chernobyl", "Dexter", "The Last Dance", "This is Us"];

const favorito = "Dexter";


function listaSeries(seriados, favorito){
    i=0
    imax = seriados.length;
    
     while (i<imax) {
        if(seriados[i]==favorito){
          return  i
        }
 
     i++;
     }
     return undefined
 }
 
 console.log(listaSeries(seriados, favorito))