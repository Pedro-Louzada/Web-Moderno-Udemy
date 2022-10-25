function calculoBasico(valor1, operacao, valor2){
    switch (operacao){
        case '+':
        console.log(valor1 + valor2)
        break
        case '-': 
        console.log(valor1-valor2)
        break 
        case '*':
        console.log(valor1 * valor2)
        break 
        case '/': 
        console.log(valor1 / valor2)
        break
        default:
        console.log('Operação Inválida!')

    }
}
calculoBasico(2, '-', 1)
calculoBasico(2, '+', 1)
calculoBasico(2, '*', 1)
calculoBasico(1, '/', 2)
calculoBasico(2, '&', 1)
