//Aderindo function a uma variável...

const imprimirSoma = function (a,b){
    console.log(`A soma dos valores aderidos foi de ${a+b}.`)
}

imprimirSoma(2,3)

/* ARROW FUNCTION >     criando função de uma forma simplificada ...
let nomeDaVariavel = (parâmetros) => {
    console.log(parâmetros)
}
'=>' denominasse como se fosse a palavra function
*/

const divisao = (a,b) => {
    console.log(a/b)
}

divisao(4,2)

//função com uma única linha de forma simplificada 

const subtracao = (a,b) => a - b

console.log(subtracao(5,2))