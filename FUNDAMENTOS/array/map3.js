Array.prototype.map2 = function (callback) {

    const newArray = []

    for (let i = 0; i < this.length; i++){
        newArray.push(callback(this[i], i, this))
    }

    return newArray
}

const carrinho = [
    ' { "nome": "Borracha", "preco": 3.45 } ',
    ' { "nome": "Caderno", "preco": 13.90 } ',
    ' { "nome": "Kit Lápis", "preco": 41.22 } ',
    ' { "nome": "Caneta", "preco": 7.50 } ',
]

// Retornar um ARRAY apenas com os preços

const paraObjetos = json => JSON.parse(json) //transforma strings em objs com JSON
const apenasPreco = produto => produto.preco

const resultado = carrinho.map2(paraObjetos).map2(apenasPreco)
console.log(resultado)
