//get e set são funções para que possamos acessar valores internos deles
//GET
// exemplo: ao inves de function coloca get e insere um nome a funcao get.., get Valor () { ... } // ñ precisa parametro
//SET
//exemplo: ao inves de function coloca set e insere um nome a funcao det.., set Valor () { ... } // preicsa de parametro

const sequencia = {
    _valor: 1, /* convencionalmente você começar uma variável com UNDERLINE,
                   signfica que esta é privada
                */
    get valor() { return this.valor++ },
    set valor(valor) {
        if (valor > this._valor){

            this._valor = valor 
        }
     }   
}
