/* Object.seal <- você irá selar o objeto, ou seja, não será possível adicionar nem excluir mais atributos ao objeto
porem você poderá modificar os atributos ja existentes
*/
 const pessoa = {nome:'Juliana', idade: 35}
 Object.seal(pessoa)

 pessoa.sobrenome = 'Silva'
 pessoa.idade = 29
 delete pessoa.nome


/*Object.preventExtension <- não será possível extender, adicionar novos atributos 
obs: neste você consegue excluir atrbutos e adicionar
*/

const produto = Object.preventExtensions({
    nome: 'Qualquer', preco:1.99, tag: 'promocao'
})

console.log ('Extensível:', Object.isExtensible(produto)) //isto prova que o obj não é extensível

produto.nome = 'Borracha'
produto.descricao = 'Borracha escolar branca'
delete produto.tag
console.log(produto)