function contador(numeros){
    let qtdPares = 0
    let qtdImpares = 0
    for (let i = 1; i < numeros.length; i++){
    if (numeros[i] % 2 == 0){
        qtdPares++
    } else {
        qtdImpares++
    }
  }
console.log('A quantidade de números pares foi de', qtdPares,', e a de ímpares foi de,', qtdImpares)
}

numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13]
contador(numeros)