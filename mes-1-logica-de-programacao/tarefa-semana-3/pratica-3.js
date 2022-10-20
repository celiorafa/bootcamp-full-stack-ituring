function numeroPrimo(n){
   i=2
   
   while (i<n){

    primo = (n%i)

    if (primo == 0){
        primo=false
        return primo
    }  

    i++

   } return true
   
}

console.log(numeroPrimo(17))
console.log(numeroPrimo(2))
console.log(numeroPrimo(7))
console.log(numeroPrimo(8))
console.log(numeroPrimo(5))
console.log(numeroPrimo(23))
console.log(numeroPrimo(15))
console.log(numeroPrimo(1500450271))


