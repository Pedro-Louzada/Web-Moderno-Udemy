function valorPlano(idade){
    if (idade < 10){
        custo = 100 + 80
        console.log('Este é o Cuso do Plano para esta faixa etária R$',custo,',00.')
    }else if(idade >=10 && idade <=30){
        custo = 100 + 50
        console.log('Este é o Cuso do Plano para esta faixa etária R$',custo,',00.')
    }else if(idade >30 && idade <=60){
        custo = 100 + 95
        console.log('Este é o Cuso do Plano para esta faixa etária R$',custo,',00.')
    }else if(idade >60){
        custo = 100+130
        console.log('Este é o Cuso do Plano para esta faixa etária R$',custo,',00.')
    }
}


valorPlano (5)
valorPlano (10)
valorPlano (15)
valorPlano (30)
valorPlano (40)
valorPlano (60)
valorPlano (70)