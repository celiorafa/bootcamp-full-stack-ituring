let produto = {
  marca: "Tramontina",
  produto: "Jogo de talheres",
  preco: 500,
  quantidade: 132,
  categoria: "Utensilhos domésticos"
}

function listaChaves(objeto){
    console.log(Object.keys(objeto));
}

listaChaves(produto);