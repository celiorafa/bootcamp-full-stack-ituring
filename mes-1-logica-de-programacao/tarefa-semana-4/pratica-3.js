
const seriados = ["Breaking Bad", "Game of Thrones", "Stranger Things", "Chernobyl", "Dexter", "The Last Dance", "This is Us"];

const busca = "Th";


let resposta = seriados.filter(function(item){
    return item.includes(busca)

})

 console.log(resposta)