alert("Codigo Funcionando!") //mostrar uma mensagem para o usuário

const nomeUsuario = prompt("Olá, usuário, qual o seu nome?") //Mostra uma mensagem e recebe o seu valor
 
let num = Number(prompt('Olá,' + nomeUsuario + '. Digite um Numero, por favor'))
console.log(typeof num)

// operadores de incremento
//const sucessor =num++ // = num + 1
//alert ('O sucessor de ' + num + 'e' + sucessor)
console.log(num++)// 5 // operador de pós-incremento
console.log(num)// 6
console.log(++num) // 7  // operador de pré-incremento

// Operadores de decremento
console.log(num--)// 7  // operador de pós-decremento
console.log (num)// 6   
console.log(--num)// 5// operador de pre-decremento