// map <- transforma um ARRAY em um novo ARRAY, não modifica um pronto

const nums = [1, 2, 3, 4, 5]

let resultado = nums.map(function (e) {
    return e * 2
})

console.log(resultado)

/* o e dentro dos parenteses quer dizer, elementos
que seriam os que estavam dentro do ARRAY, mas posso atribuir
o nome do próprio Array
*/

const soma10 = (e) => e + 10
const triplo = (e) => e * 3
const paraDinheiro = (e) => `R$ ${parseFloat(e).toFixed(2).replace('.',',')}`

resultado = nums.map(soma10) 

console.log(resultado)