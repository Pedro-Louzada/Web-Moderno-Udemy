function processamento (valor1, valor2, valor3){

}

// função 

/* dados com funções internas <- Objetos
Objetos engloba atributos com funções
*/

objeto = {
    valor1,
    valor2,
    valor3,
    processamento () {
    // ...
    }
}

objeto.processamento() // foco passou a ser o obejto não a função

/*Princípios dos objetos 
1º abstração <- como mapear de forma simplificada e objetica o objeto 
e trazer para o seu sistema
2º encapsulamento <- detalhes mais literáis e profundos que ficam escondidos dentro
do objeto
3º herança (prototype) <- atributos que um objeto recebe de outros, evitando o inchaço
de ter detalhes desnecessários dentro do objeto
*misturas de objetos, cadeia de objetos*
ex: pegar um conceito genérico, exemplo ser humano é um mamífero, mamífero é um animal
pega conceitos genéricos e vai detrinchando
4º polimorfismo <- diferenças formas 
ex: carro
o conceito carro dependendo de sua herança por exemplo, podemos identificar um tipo de veículo
ex: automático ou manual
diferentes tipos de direções e etc...
*/