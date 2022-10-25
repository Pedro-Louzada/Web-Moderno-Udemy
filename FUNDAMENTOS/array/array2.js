const pilotos = ['Vettel', 'Alonso', 'Raikkonen', 'Massa']
pilotos.pop() // elimina o último índice do ARRAY
console.log(pilotos)

pilotos.push('Verstappen')
console.log(pilotos)

pilotos.shift()//remove o primeiro índice do ARRAY
console.log(pilotos)

pilotos.unshift('Pedro Louzada') //adiciona um novo índice para ser o primeiro do ARRAY 
console.log(pilotos)

pilotos.splice(2,1)// remover, o primeiro atributo diz a partir de qual índice vai sair e no segundo você diz quantos atributos vão sair e se por ventura quiser add novos atributos colocar após a segunda atribuição

const algunsPilotos= pilotos.slice(2) // novo ARRAY, divide apartir do segundo índice os próximos em um novo ARRAY
console.log(algunsPilotos)