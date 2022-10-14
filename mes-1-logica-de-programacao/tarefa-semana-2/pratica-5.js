
const totalCompra = function (valorDoProduto, porcentagemDesconto) {
    const conta = (valorDoProduto-(valorDoProduto*porcentagemDesconto/100))

    return conta
}

console.log(totalCompra(100,10))