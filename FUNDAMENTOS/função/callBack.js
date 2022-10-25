const fabricantes = ['Mercedes, Audi, BMW']

function imprimir (nome, indice) {

    console.log(`${indice + 1}. ${nome}`)
}

fabricantes.forEach(imprimir) //forEach faria o callBack da função de cima

// Retornar sem o CallBack

const notas = [7.7, 6.5, 5.2, 8.9, 3.6, 7.1, 9.0]

let notasBaixas = []

for (let i in notas){
    if (notas <7){
        notasBaixas.push(notas[i])
    }
}

// com CallBack

const notasBaixas2 = notas.filter (function(nota)
{

    return nota < 7 

}) // se for verdadeira vai pra dentro de array deee notasBaixas, se ñ ela simplesmente ignora

//.filter filtra o array por determinado critério 

console.log (notasBaixas)