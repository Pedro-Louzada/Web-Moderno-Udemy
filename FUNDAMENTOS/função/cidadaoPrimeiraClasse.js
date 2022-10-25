// criando função de maneira literal
function fun1 () {}

//armazenar em uma variável 

const fun2 = function () {}

// armazenar dentro de um array

const array = [function(a, b) {return a + b}]

// armazenar em obj ... 

const obj = {}
obj.falar = function () { return 'Opa!'}
console.log(obj.falar())
