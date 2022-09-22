/***
 * Estruturas de repetição
 * 
 */

// While --> ENQUANTO
 // NaN = não ha número
 //  isNaN = determina se o valor e NaN ou não



let preçoProduto = parseFloat (prompt('Qual o Preço do produto?')) 

while (isNaN(  preçoProduto ) || preçoProduto <= 0) { // WHILE : ENQUANTO FOR FALSO, VAI REPETIR
  alert( 'O preço digitado e inválido. por favor, informe o preço apenas com números, sem caracteres')
  preçoProduto = parseFloat(prompt('qual o preço do produto?'))

  
 
   
    

} 
  let mensagem =`
  informe o método de pagamento:
  Digite 1 para pagamento em dinheiro
  digite 2 para pagamento em cheque
  digite 3 para pagamento em cartão`

  let metodoDePagamento = parseInt (prompt(mensagem))

console.log(preçoProduto)
console.log(metodoDePagamento)

while (isNaN( metodoDePagamento ) || metodoDePagamento < 1 &&   metodoDePagamento >3) { // WHILE : ENQUANTO FOR FALSO, VAI REPETIR
  alert( 'quantidade invalido' )
 metodoDePagamento = parseFloat(prompt(`
 informe o método de pagamento:
 Digite 1 para pagamento em dinheiro
 digite 2 para pagamento em cheque
 digite 3 para pagamento em cartão`)) }


  

 

if (metodoDePagamento == 1 || metodoDePagamento == 2 ) 
{
     
    const precoFinal = preçoProduto *0.9
   alert (`O preço final do pagamento e ${precoFinal} reais`) }
  else if( metodoDePagamento == 3) {  
    const parcela = parseInt(prompt('informe a quantidade de parcelas'))

    if (parcela == 1) {
        const precoFinal = preçoProduto * 0.85
        alert ( `O Preço final do pagamento é ${precoFinal} `)
    }
    else if (parcela ==2){                             
    alert(` O preço final do pagamento e ${preçoProduto}`)
  }
  else {
    const precoFinal = preçoProduto * 1.1
    alert (`O preço final do pagamentoe ${precoFinal}`)
  }

  

  }
