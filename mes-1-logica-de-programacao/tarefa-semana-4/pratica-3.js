
const seriados = ["Breaking Bad", "Game of Thrones", "Stranger Things", "Chernobyl", "Dexter", "The Last Dance", "This is Us"];

const termo = "Th";

function busca(termo){
let resposta = seriados.filter(function(item){
    return item.includes(termo)

})

return resposta
}

console.log(busca(termo));