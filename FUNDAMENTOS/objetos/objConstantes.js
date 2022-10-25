const pessoa = { nome: 'Julia' }
pessoa.nome = 'Pedro'
console.log(pessoa)

/*pessoa.nome <- mudou o atributo {nome}
que estava dentro do obj
*/

Object.freeze(pessoa) //.freeze congela o atributo dado à aquele obj
pessoa.nome = 'Maria'

//'Pedro' continuará como nome 