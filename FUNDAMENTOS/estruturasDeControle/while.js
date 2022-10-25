//laço while precisa sempre atribuir um valor a variável...
function getInteiroAleatorioEntre (max, min){
    const valor = Math.random() * (max - min) + min
    return Math.floor(valor)
}

let opcao = 0

while (opcao != -1){
    opcao = getInteiroAleatorioEntre(-1,10)
    console.log(`A opção escolhida foi ${opcao}.`)
}

console.log('Até a próxima!')

//Do while 

// let opcao // ñ precisa aderir nenhum valor no Do while ...

do {
    opcao = getInteiroAleatorioEntre(-1,10)
    console.log(`A opção escolhida foi ${opcao}.`)
} while (opcao != -1)

console.log('Até a próxima!')

