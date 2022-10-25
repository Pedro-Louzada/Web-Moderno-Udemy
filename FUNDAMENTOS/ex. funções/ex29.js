function intervalo(vetor){
    qtdNumerosDentro = 0
    qtdNuemrosFora = 0
    for (let i = 0; i < vetor.length; i ++){
        if (vetor[i] >= 10 && vetor[i] <= 20){
            qtdNumerosDentro++
        }else{
            qtdNuemrosFora++
        }
    }
    return `${qtdNumerosDentro} números dentro do intervalo, ${qtdNuemrosFora} números fora do intervalo`
}

vetor = [7, 8, 9, 10, 11, 12, 16, 17, 18, 19, 20, 21]

console.log(intervalo(vetor))

/*obs:.length tem como função mostrar o tamanho da string
exemplo: string JAVA, o lenght dele será 4.
*/