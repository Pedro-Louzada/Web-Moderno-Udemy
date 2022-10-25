function compras (trabalho1, trabalho2) {
    const comprarSorvete = trabalho1 || trabalho2
    const comprarTV50 = trabalho1 && trabalho2
    const comprarTV32 = trabalho1 != trabalho2
    const serSaudavel = !(comprarSorvete) // operador unário

    return {comprarSorvete, comprarTV50, comprarTV32,serSaudavel}
}

console.log (compras (true, true))
console.log (compras (true, false))
console.log (compras (false, true))
console.log (compras (false, false))
