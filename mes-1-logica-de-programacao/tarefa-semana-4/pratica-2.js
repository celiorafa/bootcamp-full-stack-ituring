const seriados = ["Breaking Bad", "Game of Thrones", "Stranger Things", "Chernobyl", "Dexter", "The Last Dance", "This is Us"];

const favorito = "Dexter";

let listaSeries = (seriados, favorito) => {
  seriados.forEach(function(item){
   return item==favorito ? item
  })
  
  }


 
 console.log(listaSeries(seriados, favorito))