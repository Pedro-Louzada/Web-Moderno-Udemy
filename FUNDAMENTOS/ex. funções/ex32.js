function mediaAritmetica (inteiros){
    let soma = 0
    for (let i = 0; i < inteiros.length; i++){
        soma += inteiros[i]
    }

    return soma/inteiros.length
}

inteiros = [2, 4, 6, 8, 10]

console.log (mediaAritmetica(inteiros))