function maiorMenor(valor1, valor2) {
    if (valor2 == String && valor1 == Number){
        return false 
    }else return true
}

console.log(maiorMenor(1,"1"))
console.log(maiorMenor(1, 1))
console.log(maiorMenor(1,0))
console.log(maiorMenor(1,2))
