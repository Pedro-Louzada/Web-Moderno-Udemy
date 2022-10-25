// filtrar os ARRAY 

Array.prototype.filter2 = function(callback){

    const newArray = []

    for (let i = 0; i < this.length; i++){

        if (callback(this[i], i, this)) {

            newArray.push(this[i], i, this)
        } 
    }

    return newArray
}

const produtos = [
    {nome: 'Notebook', preco: 2199, fragil: true},
    {nome: 'Ipad Pro', preco: 4199, fragil: true},
    {nome: 'Copo de Vidro', preco: 13.99, fragil: true},
    {nome: 'Copo de Plástico', preco: 18.99, fragil: false},
]

const caro = produtos => produtos.preco >= 500
const fragil = produtos => produtos.fragil

console.log(produtos.filter2(caro).filter2(fragil))
    