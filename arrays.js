/**
 * Arrays ou vetores é um tipo especial que te permite armazenar diversos valores
 * em apenas um local
 */

// criando um arrays
/*let arr = new Array()     Array -> []
let arr2 = new Array(5) */

/**
 * Cada valor de um array é separado por virgula
 * 
 *  Dentro de um array eu posso ter vários tipos de dados
 */

/**
 * ->Cada posição e representada por um numero
 * -> A primeira posição de um Array é a posição/ é a 0
 */
/* let arr = [10,15, 9.8, 'Eu sou um texto dentro de uma array', 'Olá, mundo' , true, false, false]
console.log(arr[6])
arr [6] = 'batata'
console.log(arr[6])
arr [8] = 'Agora a posição 8 existe dentro de arr'
console.log(arr)  */



const lista = ['Joao', 'Maria','Rafael','Lucas' ,'Geovana', 'Larissa', 'Drica', 'Marcos ']
console.log (lista)
lista.push('roberta') //adiciona um valor no final do array
console.log(lista)
lista.unshift('Alexia') // adiciona um  valor no inicio do array
console.log(lista)
lista.pop() //remove o ultimo valor  da array
console.log(lista)
lista.shift() //remove o primeiro valor de um array
console.log (lista)

console.log (lista.concat('Júlio')) // cria um novo array adicionando o valor passado como parâmetro
console.log(lista.join('-> '))  // Joao ->  Maria -> Rafael -> lucas -> ....  (SEPARADOR)