const alunos = [
    {nome: 'João', nota: 7.3, bolsista: false},
    {nome: 'Pedro', nota: 9.2, bolsista: true},
    {nome: 'Ana', nota: 9.8, bolsista: false},
    {nome: 'Maria', nota: 8.7, bolsista: true},
]

// Desafio1: Todos os alunos são bolsistas ? 

const todosOsBolsistas = (resultado, bolsista) => resultado && bolsista
console.log(alunos.map(a => a.bolsista.reduce(todosOsBolsistas)))


// Desafio2: Algum aluno é bolsistas ? 
//1º op = 

// const todosOsBolsistas = (resultado, bolsista) => resultado || bolsista
console.log(alunos.map(a => a.bolsista.reduce(todosOsBolsistas)))

//2º op = 
const resultado = alunos.map(a => a.bolsista).reduce(function(acumulador, atual){
    if (a.bolsista == true){
        console.log ('Bolsista')
    } else {
        console.log('Não Bolsista')
    }
})