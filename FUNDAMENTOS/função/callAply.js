function getPreco (imposto = 0, moeda = 'R$') {
return `${moeda} ${this.preco * (1 - this.desc) * (1 + imposto)}`
}                    

const produto = {
    nome: 'Notebook',
    preco: 4599,
    desc: 0.15,
    getPreco
}

console.log(produto.getPreco())

//usando a função call p chamada da função

/*console.log(getPreco.call(contexto, parametro, parametro))
contexto = obj, por exemplo, e depois parametros seria o da funcao getPreco*/

const carro = { preco: 49900, desc: 0.2}

console.log(getPreco.call(carro)) // chamou e aplicou a função no obj carro ...

//usando a função apply

/*console.log(getPreco.call(contexto, [parametro, parametro]))
contexto = obj, por exemplo, e depois se passa os parametros funcao getPreco dentro de um array*/

console.log(getPreco.apply(carro)) // chamou e aplicou a função no obj carro ...

