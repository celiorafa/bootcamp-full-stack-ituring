
/* -----
let listaRaiz = numeros.map(function(item){
    return Math.sqrt(item);
});

console.log(listaRaiz)
----*/

// DESAFIO

let numeros = [4, 9, 16, 25, 36, 49];

function teste(numeros){
let listaRaiz = numeros.map(item => (Math.sqrt(item)))
console.log(listaRaiz);
}

teste(numeros);