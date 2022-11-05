
function totalCompra(valorDoProduto, porcentagemDesconto)
{
    const total = (valorDoProduto-(valorDoProduto*porcentagemDesconto/100))
    return total
}
//const conta = totalCompra(100, 10)
console.log(totalCompra(100, 10));