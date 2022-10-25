const alunos = [
    { nome: 'Pedro', nota: 8.5},
    { nome: 'Ana', nota: 7.5}
]

// Imperativo

let total1 = 0 
for (let i =0; i < alunos.length; i++){
    total1 += alunos[i].nota
}
console.log(total1/alunos.length)

// Declarativa

const getNota = aluno => alunos.nota 
const soma = (total1, atual) => total1 + atual
const total2 = alunos.map(getNota).reduce(soma)
console.log(total2/alunos.length)