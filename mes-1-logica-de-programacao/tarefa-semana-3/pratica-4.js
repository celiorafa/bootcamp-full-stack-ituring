
function listaSeries(seriados){
   i=0
   imax = seriados.length;
   
    while (i<imax) {
    console.log(`[${i}] ${seriados[i]}`)
    i++;
    }
}

listaSeries(["Breaking Bad", "Game of Thrones", "Stranger Things", "Chernobyl", "Dexter", "The Last Dance", "This is Us"])