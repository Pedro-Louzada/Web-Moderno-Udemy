// JSON converte por exemplo, um objeto, para um forma textual, uma string...
//JSON formato de dados 

const obj = { a: 1, b: 2, c: 3, soma () { return a + b + c } }

console.log(JSON.stringify(obj)) // tranforma o obj em JSON, forma literal

console.log(JSON.parse('{ "a": 1, "b": 2, "c": 3 }')) // transforma JSON em obj, Obs: Seguir ligeiramente este formato '{ "a": x, ...)
                                                      
// tudo que for string é tomado pelas aspas duplas ("string")

//JSON.parse() <- faz o inverso, transforma uma string em Obj