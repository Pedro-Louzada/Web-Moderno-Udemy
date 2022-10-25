const produto = new Object // <- aderi um objeto a variável produto
produto.nome = 'Cadeira'//.nome seria um atributo do objeto
produto.marca = 'Genérica'
produto.preco = 220 

// ou 

const Usuario = new Object //criando obj

Usuario['nome'] = ['Pedro']

console.log(produto)

// consigo deletar atributos
delete produto.preco
delete produto.nome 

