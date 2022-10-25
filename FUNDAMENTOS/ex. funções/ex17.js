function planoDeTrabalho (plano, salarioAtual){
    switch (plano){
        case 'A':
        salarioAtual += salarioAtual*0.1
        console.log('Seu salário atual foi de R$',salarioAtual,',00.')
        break 
        case 'B': 
        salarioAtual += salarioAtual*0.15
        console.log('Seu salário atual foi de R$',salarioAtual,',00.')
        break
        case 'C':
        salarioAtual += salarioAtual*0.2
        console.log('Seu salário atual foi de R$',salarioAtual,',00.')
        break
        default:
        console.log('Plano não existente!')
    }
}

planoDeTrabalho('A',1000)
planoDeTrabalho('B',2000)
planoDeTrabalho('C',3000)
planoDeTrabalho('D',4000)