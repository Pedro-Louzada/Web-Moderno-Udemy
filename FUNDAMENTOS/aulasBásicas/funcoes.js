//FUNCOES SEM RETORNO
//Para exibir uma função devem estar dentro de chaves
function imprimirSoma (a, b)

{console.log (a + b)

}

imprimirSoma (5, 4)

//FUNCAO COM RETORNO

function soma(a, b = 1)
{
    return a + b
}

console.log (soma (2))