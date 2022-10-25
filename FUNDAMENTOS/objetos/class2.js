class Avo {
    constructor(sobrenome){
        this.sobrenome = sobrenome  
    }
}

class Pai extends Avo {
    constructor(sobrenome, profissao = 'Professor') {
        super(sobrenome)//ele busca o sobrenome no prototype dele
        this.profissao = profissao 
    }
}

class Filho extends Pai {
    constructor (){
        super('Silva')
    }
}

const filho = new Filho 
console.log (filho)

//extends quer dizer que a classe Pai faz parte da Heranca da classe criada a cima Avo
// super seria uma super classe, ou seja, pela classe Pai consigo ter acesso ao atributo atribuido a classe Avo 
