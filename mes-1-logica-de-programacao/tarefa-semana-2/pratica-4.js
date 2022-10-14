let valorDoProduto
let porcentagemDesconto
let total

function totalCompra(valorDoProduto, porcentagemDesconto){

    total = (valorDoProduto-(valorDoProduto*porcentagemDesconto/100))
    return total

}
totalCompra(100, 10)
console.log(total)