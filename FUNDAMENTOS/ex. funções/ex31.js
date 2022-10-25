function numerosNegativos (vetor){
    let negativo = 0
    for (let i =0; i < vetor.length; i++){
        if (vetor [i] < 0){
            negativo++
        }
    }
    return negativo
}

vetor = [-3, -2, -1, 0 , 1, 2, 3]

console.log(numerosNegativos(vetor))