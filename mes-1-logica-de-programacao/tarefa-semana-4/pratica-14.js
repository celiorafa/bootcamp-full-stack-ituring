let rest = {
    restaurante: "Turing Gourmet",
    tipo: "Comida britânica",
    avaliacoes: [
      {
        cliente: "Thais S.",
        nota: 9.8
      },
      {
        cliente: "Thales Gonçalves",
        nota: 8.9
      },
      {
        cliente: "José Lopes",
        nota: 9.9
      },
      {
        cliente: "Cristina Souza",
        nota: 9.3
      },
      {
        cliente: "Leo Garcia",
        nota: 8.5
      }
    ]
  }

function media (lista){
    let soma=0;
    let media =0;
    lista.forEach(function(a){
        soma += a.nota;
    })

    media = soma / lista.length;
    
    console.log(`A média de avaliações do restaurante Turing Gourmet foi de ${media.toFixed(2)}`);

};



media(rest.avaliacoes);