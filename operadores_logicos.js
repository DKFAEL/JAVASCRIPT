/**
 * Operadores Logicos
 */

// Operador E  (REPRESENTADO POR ->  &&)

// v -> verdadeiro
// f - falso
/**
 *  V V -> VERDADEIRO
 * F V - > FALSO       PRECISA QUE TODOS SEJAM VERDADEIROS
 * V F -> FALSO
 * F F -> FALSO
 */

//média precisa ser maior ou igual 7 e precisa ter, no minimo, 80%  de presença
const media =(3.5 + 6 + 10) / 3
const presença = 0.7
console.log (media >= 7 && presença >= 0.8) // false 

const media2 =(7. + 10 + 10) / 3
const presença2 = 0.95
console.log (media2 >= 7 && presença2 >= 0.8) // true

//OPERADOR Ou (REPRESENTADO POR  ||)   || = Ou

/**
 * V V -> V
 * F V -> V            SO PRECISA DE UMA VERDADEIRA
 * V F -> V
 * F F -> F
 */
console.log(4> 7 || 3 < 2)// false
console.log(5 > 3.5 || 7 > 8) // true


const estado = 'CE'
console.log( estado == 'SP' || estado == 'MG')

const idade = 15
console.log(idade >= 16 || idade < 60) // true


// OPERADOR NÃO REPRESENTADO PELO  -> !

/**
 * not V -> F
 * not F ->  V            (NEGAÇÃO)
 */

 const valor = 5 < 3
 console.log (!valor )
 console.log (!true)
 console.log (!false)


const logado = false

if (!logado) { 'você não pode ecessar o meu SubmitEvent, sai daqui'}