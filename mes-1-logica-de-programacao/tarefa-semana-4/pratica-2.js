const seriados = ["Breaking Bad", "Game of Thrones", "Stranger Things", "Chernobyl", "Dexter", "The Last Dance", "This is Us"];

const favorito = "Dexter";

let listaSeries = (seriados, favorito) => {
  seriados.forEach(function (item,i){
   
    if (item==favorito)
    console.log(i);
    })
  
}

listaSeries(seriados, favorito);