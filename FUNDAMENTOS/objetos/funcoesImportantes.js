const pessoa = {
    nome: 'Rebeca',
    idade: 13,
    peso: 15
}

console.log (Object.keys(pessoa)) // keys seriam neste exemplo, nome, idade e peso <- keys são os atributos do obj
console.log (Object.values(pessoa)) // values seriam os valores atribuídos 
console.log (Object.entries(pessoa)) // entries seriam as chaves com os valores atribuídos

Object.defineProperties(pessoa, 'dataDeNascimento', {
    enumerable: true, // vai sair dentro do obj pessoa 
    writable: false, // nao pode ser modificado 
    value: '01/01/2019' //valor atribuído
}) 

