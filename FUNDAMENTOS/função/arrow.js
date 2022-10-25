let dobro = function (a) {
    return 2 * a 
}

dobro =  (a) => {
    return 2 * a 
    // ""=>" função arrow, modo simpleficado de apresentar uma função, sempre oq vem antes da arrow function são os parãmetros
}

/* por ter um parametro só, no caso o "a" podemos 
tira-lo do parenteses 
*/

dobro = a => 2 * a // retorno implícito 

// ARROW FUNCTION <- Função reduzida 

function pessoa () {

    this.idade = 0

    setInterval(() => {

        this.idade ++
        console.log (this.idade)


    }, 1000)
}