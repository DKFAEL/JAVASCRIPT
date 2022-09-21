/**
 * Operadores de comparação
 */

//Verdadeiroou   (true) ou  falso (false)

// igualdade

const msg = 'eu sou uma mensagem'
const msg2 = ' eu sou a segunda mensagem'

console.log(msg == msg2) // (False) =  (  = atribui valor   == faz comparação)
const num = 5
const num2 = 5
console.log (num == num2) // true

let a = 78
let b = '78'
console.log(a==b) // true

// idênticos
console.log (a === b) // false

// Diferença
console.log(msg != msg2) // true !== (Diferença)
console.log(a != b) // false
console.log(a !==b) // true

a = 56
b = 30
let c = 500
let d = 500
console.log (a > 30 )  // true      ( >  ) MAIOR QUE...
console.log (c >= d)// true     ( >=  )  MAIOR OU IGUAL QUE...


console.log (3 < 7.5) // true    ( <  ) MENOR QUE..
console.log (7.5< 7.5) // false   ( <= )  MENOR OU IGUAL QUE...
console.log (8 <= 8) // true

