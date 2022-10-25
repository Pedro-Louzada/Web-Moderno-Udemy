/* variável let tem um scopo de bloco mais abrangente, ou seja, 
ela busca variável declara em um scopo menor 1º se não buscará 
o valor atribuído a uma variápvel mais abrangente "GLOBAL", podendo 
aderir valores diferentes em scopos diferentes e não haverá conflitos.
*/

//Exemplos:

let numero = 1 

{
    let numero = 2
    console.log(`dentro = ${numero}`)
}

console.log(`fora = ${numero}`)

// variável let dentro de uma estruta de repetição só teria o valor atribuído dentro da estrutura...