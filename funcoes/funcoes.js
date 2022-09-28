/**
 * Funções são blocos de construçao fundamentais em javascript.Uma função e um procedimento de Javascript
 * -um conjunto de instruções que executa uma tarefa ou calcula um valor. para usar uma função,você deve
 * defini-la em algum lugar no escopo do qual você quiser chamá-la.
 */

/**
 * Parâmetros
 * 
 * São valores que passamos para as funções, para que elas utilizem esses valores dentro delas
 * 
 */

// passar um valor como parâmetro para mostrá-lo dentro do alert    ---
function cumprimentar (mensagem /* ='mensagem padrão'*/, repetir /*= 3*/) {    // da pra atribuir   VALOR AQUI<<
    for (let i = 1; i <= repetir; i++)

    alert (mensagem)                    /** O ponto é quando eu quero acessar a propriedade do meu...   ? */
}
function soma (num , num2) {
    /**
     * O return serve paa enviar o resultado para a execução daquela função
     */
    let result = num + num2
   return result  
   
}

function maiorValor (a,b) {
    if (a>b) {
        return  a
    }
    else{
        return b
    }
}
let resultado = soma( 5, 9) //11 
console.log( `O valor da  variavel resultado é ${resultado}`)

const num1 = parseInt (prompt('informe o primeiro numero'))
const num2 = parseInt (prompt('informe o segundo numero '))
alert(`o maior numero entre esses e ${maiorValor(num1, num2)}`)
/*  cumprimentar('Olá Mundo', 3)   
/*cumprimentar(prompt('Olá Mundo'), prompt('repeticao'))    ( <<<<DA PRA PEGARO VALOR INSERIDO POR UM USUARIO E COLOCAR DENTRO DO PARÂMETRO DESSE JEITO<<<<) */
                      // ATRIBUIR VALOR AO PARÂMETRO
/* cumprimentar('eu gosto muito de JS')
cumprimentar(' JavaScript sola o #C') */


/**
 * Criem uma função que gera o resultado de uma equação do segundo grau
 * 
 * ax² + bx + c = 0
 * 
 * delta = b² - 4ac
 * b = -b +- raíz de delta / 2a
 */
