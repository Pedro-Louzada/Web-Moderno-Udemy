

function Moeda (valor){

    console.log(`R$ ${valor.toFixed(2).toString().replace(".",",")}`)
}

Moeda(0.1 + 0.2)

//exemplo do professor
function formatarValorDecimal(valorDecimal) {
    valorEmReais = `R$ ${valorDecimal.toFixed(2).toString().replace(".", ",")}`
    console.log(valorEmReais)
}

formatarValorDecimal(0.1 + 0.2)