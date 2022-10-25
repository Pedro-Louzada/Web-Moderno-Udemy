
let stringsPontuacoes = '30, 40, 20, 4, 51, 25'

function avaliaPontuacoes (stringPontuacoes) {
    let pontuacoes = stringsPontuacoes.split(', ')// separa-las por vírgula
    let qtdQuebraDeRecords = 0
    let piorJogo = 1
    let maiorPontuacao = [0]
    let menorPontuacao = [0]
    for (let i = 1; i < pontuacoes.length; i++){

        if (pontuacoes[i] > maiorPontuacao){
            maiorPontuacao = pontuacoes[i]
            qtdQuebraDeRecords++
        }else if (pontuacoes[i] < menorPontuacao){
            menorPontuacao = pontuacoes[i]
            piorJogo = i + 1;
        }
    }
    
    return [qtdQuebraDeRecords, piorJogo]

}

console.log (avaliaPontuacoes(stringsPontuacoes))

//obs: fiz passo a passo, não consegui desenvolver sozinho




