const listaSeries = ["Breaking Bad", "Game of Thrones", "Stranger Things", "Chernobyl", "Dexter", "The Last Dance", "This is Us"];


function exibirSeries(listaSeries)
{
        listaSeries.forEach(function(item, indice)
        {
                console.log(`[${indice}] ${item}`);
        })
}

exibirSeries(listaSeries);