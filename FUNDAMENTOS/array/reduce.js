const alunos = [
    {nome: 'João', nota: 7.3, bolsista: false},
    {nome: 'Pedro', nota: 9.2, bolsista: true},
    {nome: 'Ana', nota: 9.8, bolsista: false},
    {nome: 'Maria', nota: 8.7, bolsista: true},
]

const resultado = alunos.map(a => a.nota).reduce(function(acumulador, atual) {
    console.log(acumulador,atual)
    return acumulador + atual
})

//acumulador índice [0], atual será sempre o próximo e assim por diante 

console.log(resultado)