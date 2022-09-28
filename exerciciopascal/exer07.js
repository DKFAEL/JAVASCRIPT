/**Escreva um algoritmo que leia um valor inicial A e uma razão R e imprima uma seqüência em
P.G. contendo 10 valores. */
const A =  parseInt(prompt('Digite o Valor inicial'))
const R = parseInt(prompt('Digite a razão'))

let fim = []
let total = A

for (let i = 1; i <=10; i++) {
    total = +total * R
    fim.push(total)

}

alert(`Sua P.A E : ${fim}`)