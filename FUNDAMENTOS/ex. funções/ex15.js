function comprasDeCarros (veiculo){
    switch (veiculo){
        case 'hatch':
            console.log('Compra Efetuada com Sucesso!')
        break 
        case 'sedans': case 'motocicletas': case 'caminhonetes':
            console.log('Tem certeza que não prefere este modelo?')
        break 
        default:
            console.log('Não trabalhamos com este modelo de veículo aqui!') 
    }
}

comprasDeCarros ('hatch')
comprasDeCarros ('sedans')
comprasDeCarros ('motocicletas')
comprasDeCarros ('caminhonetes')
comprasDeCarros ('Ferrari')