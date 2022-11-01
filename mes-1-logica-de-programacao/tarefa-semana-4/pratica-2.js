const seriados = ["Breaking Bad", "Game of Thrones", "Stranger Things", "Chernobyl", "Dexter", "The Last Dance", "This is Us"];

const favorito = "Dexttter";

let listaSeries = (seriados, favorito) => {
  let resultado = undefined
  seriados.forEach(function (item,i){
   
    if (item==favorito)
    resultado = i;
    })
  console.log(resultado);
}

listaSeries(seriados, favorito);