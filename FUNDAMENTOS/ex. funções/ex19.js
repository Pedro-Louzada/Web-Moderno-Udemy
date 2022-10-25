function cardapioLanchonete (codigo, quantidade){
    switch (codigo){
        case 100:
            valorTotal = quantidade* 3
            console.log('O valor total pelos Cachorros Quente será de', valorTotal)
            break
            case 200:
            valorTotal = quantidade* 4
            console.log('O valor total pelos Hambúrguer Simples será de', valorTotal)
            break
            case 300:
            valorTotal = quantidade* 5.5
            console.log('O valor total pelos Cheeseburguer será de', valorTotal)
            break
            case 400:
            valorTotal = quantidade* 7.5
            console.log('O valor total pelos Bauru será de', valorTotal)
            break
            case 500:
            valorTotal = quantidade* 3.5
            console.log('O valor total pelos Refrigerante será de', valorTotal)
            break
            case 600:
            valorTotal = quantidade* 2.8
            console.log('O valor total pelos Suco será de', valorTotal)
            break
            default:
            console.log('Código Inválido!')     
    }
}

cardapioLanchonete (100, 2)
cardapioLanchonete (200, 2)
cardapioLanchonete (300, 2)
cardapioLanchonete (400, 2)
cardapioLanchonete (500, 2)
cardapioLanchonete (600, 2)
cardapioLanchonete (700, 2)