//maneiras de criar objetos 

// usando a notação literal   
const obj1 = {}
console.log(obj1)

//Object em JS
console.log(typeof Object,typeof new Object)
const obj2 = new Object
console.log(obj2)

//Funções Construtoras 

function Produto(nome, preco, desc) {
    this.nome = nome
    this.preco = preco
    this.desc = desc
}

console.log(Produto('Papel Sulfite', 10.5, 0.15))

// Função Factory 

function criarFuncionario(nome, salarioBase, faltas) {
    return{
        nome,
        salarioBase,
        faltas,
        getSalario(){
           return (salarioBase/30) * (30 - faltas)
        }
    }
}

const f1 = criarFuncionario('Pedro', 10000, 3)
const f2 = criarFuncionario('Ricardo', 12000, 2)
console.log(f1.getSalario(), f2.getSalario())

//Objeto.creat 

const filha = Object.create(null)
filha.nome = 'Ana'
console.log(filha)

//Json que retorna um obj

const fromJson = JSON.parse('{"Info": "Sou um Json"}')