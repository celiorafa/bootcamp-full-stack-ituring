let movimentacao = [{
    valor: 100.00,
    movimentacao: "deposito",
    dataMovimentacao: "2021-08-02T07:46:36.611Z"
  },
  {
    valor: 20.00,
    movimentacao: "retirada",
    dataMovimentacao: "2021-09-17T09:46:36.611Z"
  },
  {
    valor: 30.00,
    movimentacao: "retirada",
    dataMovimentacao: "2022-02-24T09:46:36.611Z"
  },
  {
    valor: 10.00,
    movimentacao: "deposito",
    dataMovimentacao: "2022-03-02T09:46:36.611Z"
  },
  {
    valor: 7.00,
    movimentacao: "retirada",
    dataMovimentacao: "2022-04-20T09:46:36.611Z"
  },
  {
    valor: 21.00,
    movimentacao: "retirada",
    dataMovimentacao: "2022-03-20T09:46:36.611Z"
  },
  {
    valor: 5.00,
    movimentacao: "retirada",
    dataMovimentacao: "2022-06-08T09:46:36.611Z"
  }]

  function saldoFinal (extrato){
    let somaTotal = 0
    let somaDepositado = 0
    let somaRetirado = 0
    let totalDep = 0
    let totalRet = 0
    extrato.forEach(function(item, i){
        if (item.movimentacao == "deposito"){
            somaTotal += item.valor;
            somaDepositado += item.valor;
            totalDep++;
        } else if (item.movimentacao == "retirada"){
            somaTotal -= item.valor;
            somaRetirado += item.valor;
            totalRet++;
        }   

    })
    console.log(`Total de depósitos: ${totalDep}`);
    console.log(`Total de retiradas: ${totalRet}`);
    console.log(`O valor total depositado foi de: R$ ${somaDepositado}`);
    console.log(`O valor total retirado foi de: R$ ${somaRetirado}`);
    console.log(`O saldo final de sua conta foi positivo no valor de R$ ${somaTotal}`);
  }

  saldoFinal(movimentacao);