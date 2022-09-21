/***
 * Elabore um algoritmo que calcule o que deve ser pago por um produto, considerando o preço
normal de etiqueta e a escolha da condição de pagamento. Utilize os códigos da tabela a seguir
para ler qual a condição de pagamento escolhida e efetuar o cálculo adequado.
Código Condição de pagamento

1 À vista em dinheiro ou cheque, recebe 10% de desconto
2 À vista no cartão de crédito, recebe 15% de desconto
3 Em duas vezes, preço normal de etiqueta sem juros
4 Em três vezes, preço normal de etiqueta mais juros de 10%

 */

/**
 * Métodos de pagamento
 * Em dinheiro
 * Em cheque
 * No cartão
 */

// parseFloat = analisa um argumento string, e retornar um numero de ponto fluente

const preçoProduto = parseFloat (prompt('Qual o Preço do produto?')) 
const mensagem = `
informe o método de pagamento:
Digite 1 para pagamento em dinheiro
digite 2 para pagamento em cheque
digite 3 para pagamento em cartão`

const metodoDePagamento = prompt(mensagem)

console.log(preçoProduto)
console.log(metodoDePagamento)

 // IF =                          EX: SE ALGUMA COISA ACONTECER VAI SER...
/**
 * Se o valor da constante "metodoDePagamento" for 1 ou 2,significa que a pessoa
 * possuirá um desconto de 10%
 */



     //   = atribui valor   == faz comparação

if (metodoDePagamento == 1 || metodoDePagamento == 2 ) 
{
     // pra poder usar o ${} precisa ser crase dentro do alert
    const precoFinal = preçoProduto *0.9
   alert (`O preço final do pagamento e ${precoFinal} reais`) }
  else if( metodoDePagamento == 3) {  // else EX = 'SE NÃO FOR ISSO, VAI SER ...'
    /**
     * 1 parcela = 15% de desconto
     * 2 parcelas = parcela e produto
     * 3  ou mais parcelas = acréscimo de 10%
     
     */               // ParseInt : converte seu primeiro argumento para uma string analisa,e retorna um inteiro ou  NaN
    const parcela = parseInt(prompt('informe a quantidade de parcelas'))

    if (parcela == 1) {
        const precoFinal = preçoProduto * 0.85
        alert ( `O Preço final do pagamento é ${precoFinal} `)
    }
    else if (parcela ==2){                              //else : SE NÃO FOR O DE CIMA VAI SER.... 
    alert(` O preço final do pagamento e ${preçoProduto}`)
  }
  else {
    const precoFinal = preçoProduto * 1.1
    alert (`O preço final do pagamentoe ${precoFinal}`)
  }

  

  }
      



