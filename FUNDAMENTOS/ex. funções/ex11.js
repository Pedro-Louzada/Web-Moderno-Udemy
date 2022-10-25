    function anoBissexto (ano){

        if (ano <= 0){
            return false
        }else if (ano % 4== 0 && ano % 100 !=0){
            return 'Bissexto'
        }else if(ano % 4 != 0 && ano % 400 != 0){
            return 'Não é Bissexto'
        }else if(ano % 4 != 0 && ano % 400 ==0){
            return 'Bissexto'
        }
    }

    console.log(anoBissexto(2015))
    console.log(anoBissexto(2016))