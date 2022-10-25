const avo = { attr1: 'A' }
const pai = { __prot__: avo, attr2: 'B'} // __prot__ signfica que a variável pai esta interligada a vairavel avo, podendo correlaciona-las 

console.log(pai.attr1) // vai acessar pelo avô

Object.setPrototypeOf(pai,avo) // função q coloco nos parametros obj q vao se correlacionar por herança
