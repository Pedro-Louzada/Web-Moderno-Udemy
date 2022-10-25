function salarioHorasTrabalhadas(qtdHoras,custoHoras) {
    let salarioLiquido = (qtdHoras * custoHoras)  
    return salarioLiquido - (salarioLiquido * 0.3) 
}

console.log(salarioHorasTrabalhadas(40,10))