// Delimitação de Strings


const aspasSimples = ' Olá, Mundo'
console.log (aspasSimples)



// caracteres de escape

const aspasDuplas = " outra mensagem  \n diferente \n e esssa e outra mensagem, porem não diferente" 
                                    //    \n quebra de linha dentro de uma string!
console.log (aspasDuplas)



const textoComCrase = `Olá eu sou o
javascript e sou melhor que o python`  //  ` permite que você quebre linha sem utilizar o \n (indica que esta sendo declarado uma template string)
console.log(textoComCrase)

// métodos das strings

const texto  = 'O JavaScript foi criado alguns anos após o Python. No entanto, o  javaScript é bem mais bacana.'
console.log(texto)
console.log(texto.toUpperCase()) // deixar o string todo maiusculo 
console.log(texto.toLocaleLowerCase()) // deixar a string toda minuscula
console.log(texto.concat('SERA ADICIONADO TUDO DENTRO DESSE PARENTESES ')) // CONCATENA COM OQ SERA ADICIONADO DENTRO DOS PARENTESES
console.log(texto[26]) //se eu quiser pegar apenas uma caracteres da const
console.log (texto[5], texto[17]) // se eu quiser pegar duas caracteres da const
console.log(texto.substring(2))  // se eu quiser 'recortar' a srting,Obs: dentro do substring, colocar  a caracteres que começa o 'recorte'
console.log(texto.substring(2, 12)) // botando a virgula, você indica onde começa e onde termina o 'recorte' (lembrando que espaço conta como caracteres e sempre começa a  contar do 0 e sempre botar 1 numero a mais no final)

console.log (texto.replace('JavaScript' , 'Rust' ))  // Substitui a primeira ocorrência da pesquisa
console.log (texto.replaceAll ('JavaScript' , 'Kotlin')) // substitui todas ocorrência da pesquisa "JavaScript"
console.log(texto.replace(/JavaScript/g , 'PHP')) // Outra maneira de substitui todas ocorrência da pesquisa
console.log(texto.replace(/JavaScript/gi , 'PHP')) // Utilizando o gi, ele não ignora a diferença do CapsLK na palavra



const html = '<!DOCTYPE html>\n<html></html>'
console.log (html.startsWith('<!DOCTYPE html>'))  //  startsWith = determina se uma string  começa com os caracteres especificos, etornando true ou false
console.log (html.startsWith('batata'))
console.log(html.endsWith('</body>')) // endsWith =  indica se uma string termina com determinado caracteres, retornando true ou false

const mensagem = '                                                 Olá, mundo                 '
console.log(mensagem)  
console.log(mensagem.trim())   // remove os espaços em excesso string

let senha = 'coisasdesalvador'

console.log(senha.length) // lenght = informa quantas caracteres tem a variavel
console.log(senha.length >= 8) // informa se  a senha e maior ou igual numero exigido (8)
