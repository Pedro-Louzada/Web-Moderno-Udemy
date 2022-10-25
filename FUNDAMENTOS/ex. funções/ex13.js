function avaliarDias(dia){
    switch (dia){
        case 2: case 3: case 4: case 5: case 6:
            return 'Dia Útil'
        break
        case 1: case 7:
            return 'Fim de semana'
        break
        default:
            return 'Dia Inválido'      
    }
}

console.log(avaliarDias(1))

