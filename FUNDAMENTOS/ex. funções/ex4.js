function dividendoDivisor (x,y){

    resultado = x/y
    resto = x % y
    return {
        resultado,
        resto
    }
}

console.log(dividendoDivisor (6,3))

// exemplo do professor

function divisao (dividendo, divisor) {
    console.log("Resultado: " + Math.floor(dividendo/divisor));
    console.log(`Resto: ${dividendo % divisor}`) /*$ interpolação do resto da divisão dos parâmetros
                                                obs: usar ` ` (símbolo da crase) ao invés de ' '(aspas simples)
                                                */
}

divisao(11, 4) 