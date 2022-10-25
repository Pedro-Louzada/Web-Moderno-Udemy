// filtrar os ARRAY 

const produtos = [

    {nome: 'Notebook', preco: 2199, fragil: true},
    {nome: 'Ipad Pro', preco: 4199, fragil: true},
    {nome: 'Copo de Vidro', preco: 13.99, fragil: true},
    {nome: 'Copo de Plástico', preco: 18.99, fragil: false},
]

console.log(produtos.filter(function (p) {
    return p.preco > 2500
})) //p > produto

const caro = produtos => produtos.preco >= 500
const fragil = produtos => produtos.fragil

console.log(produtos.filter(caro).filter(fragil))
    

 


