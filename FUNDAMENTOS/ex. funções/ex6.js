function jurosSimples (capitalInicial, taxaJuro, tempoAplicacao){

    return capitalInicial + (capitalInicial * taxaJuro * tempoAplicacao)
    
    }

 function jurosComposto (capitalInicial, taxaJuro, tempoAplicacao){ 
  return capitalInicial*(1+taxaJuro)**tempoAplicacao
 }

 
 console.log(jurosSimples(100, 0.1, 2))
 console.log(jurosComposto(100, 0.1, 2).toFixed(2))

 //exemplo do professor 

 function jurosSimples (capitalInicial, taxa, tempo) {
    return capitalInicial + (capitalInicial * taxa * tempo)
}

function jurosCompostos (capitalInicial, taxa, tempo) {
    return capitalInicial * (1 + taxa) ** tempo
}

console.log(jurosSimples(100, 10/100, 2));
console.log(jurosCompostos(100, 10/100, 2)); 

 
 

