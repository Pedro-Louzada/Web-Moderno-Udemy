// Classe é uma função!!

// class > function depois vc passa o nome e os parametros vc passa na function constructor na parte de dentro

class Lancamento {
    constructor (nome = 'Genérico', valor = 0)/*parametros da function class*/{
        this.nome = nome
        this.valor = valor
    }
}

class CicloFinanceiro {
    constructor(mes, ano){
        this.mes = mes
        this.ano = ano
        this.lancamentos = []
    }

    addLancamentos(... lancamentos) {
        lancamentos.forEach(l => this.lancamentos.push(l))
    }
}