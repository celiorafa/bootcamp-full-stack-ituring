let filme = {
    titulo: "Estrelas Além do Tempo",
    notaAvaliacao: 7.8,
    duracao: 127,
    anoPublicacao: 2016,
    categoria: "Drama",
}

function sinopse(filme){
    console.log (`O filme ${filme.titulo} que estreou em ${filme.anoPublicacao} tem a avaliação de ${filme.notaAvaliacao} pelo IMDb.`)
}

sinopse(filme);