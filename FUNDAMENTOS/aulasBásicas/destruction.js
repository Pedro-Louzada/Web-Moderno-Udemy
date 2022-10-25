const pessoa = {
    nome: 'Pedro',
    idade: 19,
    endereço: {
        logradouro: "RUA ABC",
        numero: 1000
    }    
}

const {nome, idade} = pessoa 
// {} representa o que vai ser retirada da variável pessoa
// nome da função {} <- destruction 
// nome do obj vem na frente da atribuição ("=")
console.log (nome, idade)