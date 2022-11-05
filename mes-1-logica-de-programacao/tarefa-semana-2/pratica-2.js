// nomeDoComprador
// nomeDoProduto
// nomeDeQuemRecebeu
// enderecoDeEntrega
// nomeDeQuemEnviouEmail

function compra(nomeDoComprador) 
{
    console.log(`Olá, ${nomeDoComprador}!`);
}

function produto(nomeDoProduto, nomeDeQuemRecebeu, enderecoDeEntrega)
{
    console.log(`Fizemos a entrega do produto ${nomeDoProduto} no endereço ${enderecoDeEntrega} com sucesso!
    O seu produto foi recebido por: ${nomeDeQuemRecebeu}
    Esperamos que você esteja contente com o produto. Caso contrário, fale conosco em até 7 dias para que possamos ajudar.`)
}

function confirmacao(nomeDeQuemEnviouEmail)
{
    console.log(`Atenciosamente, \n ${nomeDeQuemEnviouEmail}`)
}

compra("Antonio");
produto("Televisão LG", "Maria", "Rua da Casa, 01");
confirmacao("Thales");
