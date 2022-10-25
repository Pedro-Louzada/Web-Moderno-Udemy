//executando funções sem aprametros e aderindo "arguments" para determianr os parâmetros
function soma() {
    let soma = 0
    for (i in arguments){
        soma += arguments[i]
    }
    
    return soma 

}

console.log(soma(2,3,4,5)) // vai somar todos os elementos que vâo estar dentro de arguments...

// estratégia 1 para gerar valor padrão 

function soma1 (a, b, c){

    a = a || 1 //valor padrão 1
    b = b || 1
    c = c || 1 
    
    return a + b +c

    /* ou seja, 
    se o valor da incognita inicialmente for inválido ou vazia,
     ele automaticamente aplicará o valor 1 para ela
     */
    
}

console.log (soma1 ())
console.log (soma1 (3))
console.log (soma1 (2,3))
console.log (soma1(1,2,3))

// valor padrão es2015

function soma3 (a = 1, b = 1, c = 1){

    return a + b + c 
                          
}

console.log (soma3(), soma3(3), soma3(0, 0, 0))


