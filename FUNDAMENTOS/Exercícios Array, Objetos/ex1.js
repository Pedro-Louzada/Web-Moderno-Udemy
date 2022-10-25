function cumprimento(nome) {
    this.nome = nome
    return `Olá ${nome}`
}

const Juntar = cumprimento('Pedro').concat("!")

console.log(cumprimento('Pedro'))
console.log(Juntar)