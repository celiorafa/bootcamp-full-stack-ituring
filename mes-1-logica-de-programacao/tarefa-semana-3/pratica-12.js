let turma = ["Anderson Luz", "Fabio Vechia", "Claudia Lopes", "Rafael Alves", "Maria Mansano", "Jairo Ferreira", "Vitor Ribeiro"]

function divisaoDuplas(turma)
{
    const totalTurma = turma.length;
    const totalGrupos = Math.floor(totalTurma/2);
    const trio = totalTurma%2;
    let j=0;
    let ultimo = ""

    for (i=0;i<totalGrupos;i++)
    {
        if (trio==true && i==(totalGrupos-1))
        {
            ultimo=`, ${turma[totalTurma-1]}`
        }

        console.log(`Grupo ${i+1}: ${turma[j]}, ${turma[j+1]}${ultimo}`)
        j=j+2;
    }
}

divisaoDuplas(turma);
