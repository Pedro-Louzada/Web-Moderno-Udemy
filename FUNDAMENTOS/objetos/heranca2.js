const pai = {nome: 'Pedro', corDeCabelo: 'preto'}

const filha1 = Object.create(pai)
/* usando este método os parametros que 
passa dentro do parenteses, sera o protótipo do obj criado*/
filha1.nome = 'Ana'
console.log(filha1.corDeCabelo) 

const filha2 = Object.create(pai, {
    nome: { value: 'Bia', enumerable: true, writable: false}
})