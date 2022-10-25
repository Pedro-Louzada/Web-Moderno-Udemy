function tratarError(erro){
    throw new Error('Ocorreu um erro...')
}
function imprimirNome (obj){
    try{
        console.log(obj.name.toUpercase() + "!!!")
    }//bloco de código para testar um eventual erro
    catch(e){
        tratarError(e)
    }//erro vai cair diretamente dentro do catch
    finally{
        console.log('Final!')
    }//executado independente de erro
}

const nome = {nome: 'Pedro'}

imprimirNome(obj)