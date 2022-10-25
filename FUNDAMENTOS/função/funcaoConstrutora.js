function carro(velocidadeMaxima = 200, delta = 5 ){
    //atributo privado da função

    let velocidadeAtual = 0

    //metodo publico <- tornar a velocidade Atual visível fora do escopo da função

    this.acelerar = function () {
        if (velocidadeAtual + delta <= velocidadeMaxima)
        {
            velocidadeAtual += delta

        } else {
            velocidadeAtual = velocidadeMaxima
        }
    }

    //metodo publico, permitindo acesso a função velocidadeAtual

    this.getVelocidadeAtual = function () {
        return velocidadeAtual
    }
}

//Desafio

function Pessoa (nome) {

    this.nome = nome

    this.falar = function (){
        console.log(`Meu nome é ${this.nome}`)
    }
} 


const p1 = new Pessoa ('Pedro')

p1.falar()