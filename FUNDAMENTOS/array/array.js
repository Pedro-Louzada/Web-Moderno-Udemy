console.log (typeof Array, typeof new Array, typeof [])


let aprovados = new Array ('Bia, Carlos e Ana') // método novo de criar array
console.log(aprovados)

aprovados = ['Bia', 'Carlos', 'Ana'] // Notação Literal do Array ([...])
console.log(aprovados[0]) // [0] <- seria o primeiro índice do Array 
console.log(aprovados[1])
console.log(aprovados[2])
//Array indicia os atributos dele...
aprovados [2] = 'Paulo' //método mais utilizado para modificar um atributo ja atribuído no Array
console.log(aprovados)

aprovados.push('Abia') //método mais utilizado para adicionar novos elementos
console.log(aprovados.length) // conta todos os atributos dentro do Array, obj, function e etc...

aprovados.sort() //ordena o array em ordem alfabética
console.log(aprovados.sort()) 

delete aprovados [1]

console.log(aprovados[1])

aprovados = ['Bia', 'Carlos', 'Ana']
aprovados.splice(1,1) /*Adiciona e remove elementos do Array, o primeiro 1 seria de qual índice ele vai tomar como Base,
                        no caso o Carlos e o próximo 1 seria quantos elementos ele excluiria que seria somente 1, no exemplo, o Carlos...
                        e para adicionar basta colocar um novo atributo entre aspas
                      */

console.log(aprovados)
                    



