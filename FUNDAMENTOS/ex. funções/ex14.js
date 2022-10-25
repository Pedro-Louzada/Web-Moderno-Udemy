function frutasVendidas (nome){
    switch (nome){
        case 'Maça':
            console.log('Não vendemos esta fruta aqui!')
        break
        case 'Kiwi':
            console.log('Estamos com escassez de kiwis.')
        break
        case 'Melancia': 
            console.log ('Aqui está, são 3 reias o quilo.')
        break 
        default:
            console.log ('Error.')
    }
}

frutasVendidas('Maça')
frutasVendidas('Kiwi')
frutasVendidas('Melancia')
frutasVendidas('Pera')