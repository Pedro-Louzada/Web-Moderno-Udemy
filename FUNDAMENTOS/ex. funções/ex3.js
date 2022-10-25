function baseExpoente (base, expoente){

    return base ** expoente
}

console.log(baseExpoente(2,3))

// exemplo professor

function expoente (base, expoente) {
    //Podemos fazer de 2 modos
    //Método antigo:
    let resultado = Math.pow(base, expoente)
    //Método novo:
    resultado = base ** expoente

    return resultado
}

console.log(expoente(2, 3))