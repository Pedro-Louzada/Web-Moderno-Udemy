function criarProduto (produto, preço)
{
    return{

        produto,
        preço,
        desconto: 0.1
    }

  
}

console.log(criarProduto ("Notebook", 5000))
console.log(criarProduto ("Ipad", 2500))
