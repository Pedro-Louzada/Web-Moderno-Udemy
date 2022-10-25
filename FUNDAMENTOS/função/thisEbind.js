const pessoa = {
    saudacao: 'Bom dia! ',
    falar() {
        console.log(this.saudacao)
    } // método novo de criar função
}

pessoa.falar()//para acessar o atributo falar que esta inscrito dentro do obj

const falarDePessoa = pessoa.falar.bind(pessoa) // .bind, alinha o atributo ao escopo global, amarra o atributo de pessoa ao obj

falarDePessoa()

