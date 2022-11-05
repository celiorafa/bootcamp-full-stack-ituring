
function parOuImpar(numeroEscolhido) 
{
    const verificacao = numeroEscolhido % 2;

    if (verificacao)
    console.log(`O número ${numeroEscolhido} é impar.`)
    else
    console.log(`O número ${numeroEscolhido} é par.`)
}

parOuImpar(10);