/*
ARRAY <- você consegue com esta função colocar 
objetos, numeros, strings, booleanos no mesmo 
bloco 
é representado por [..., ..., ...]
*/
const valores = [7.2, 8.5, 9.3, 4.5]
console.log(valores)

/* para a emissão de um determinado número dentro 
do array, você coloca o nome da variável dada e delimita
dentro dos colchetes
*/

//EXEMPLO

console.log (valores[0], ",", valores[2])

//adicionando informações dentro do array

// variavel.push <- (...,você adiciona o que quiser)

valores.push ("Olá")
console.log (valores)

//deletar

delete valores [1]
console.log (valores)

//tirar a última informações de dentro do array
//variavel.pop()  

