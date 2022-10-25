const escola = "Cod3r"
console.log (escola.charAt(4)) 

/* .charArt é uma função que te mostraria alguma letra da palavra, 
no parenteses você coloca qual posição da letra você quer
*/

/* .concat() <- significa concatenar, ou seja, unir, 
ou também usar o símbolo de + */ 
// .replace() <- função de substituição de valores, textos, etc

console.log ("Escola ".concat(escola).concat("!"))
console.log (escola.replace(3, "e"))

/* .substring () <= delimita o que você quer que apareça 
no resultado dado pela variável
*/

console.log (escola.substring(0,3))
/* significa que ele irá começar a emitir a partir do índice 0,
ou seja, o primeiro e emitir 3 caracteres da exibição, exibindo "Cod"
*/

/*.split() <- você indicaria como deseja dividir suas strings 
para o usuário. */

console.log ("PEDRO, ANA, BELLA".split (','))