/**
 * Criar uma função responsavel por mostrar o alerta na tela
 
 */
let nt = 0
function mostrar() {

    
    /**
     * o objeto document é um objeto que faz uma representação
     * do HTML  do seu site dentro do JavaScript
     */

    /**
     * getElementById serve para recuperar um elemento HTML  pelo seu id 
     */

    /**
     * A propriedade classList retornar um array com todas as classes CSS  que um elemento possui.
     */

    /**
     * classList.remove ()  remove uma classe dinamicamente de dentro de um  elemento
     */
    const divAlerta = document.getElementById('alerta')
    divAlerta.classList.add('mostrar')

    let contador = document.getElementById('p2')
    nt ++;
    contador.innerHTML = `Você já cliclou ${nt}`
    
    
}
function fechar() {
    const divAlerta = document.getElementById('alerta')
    divAlerta.classList.remove('mostrar')
}

const btnMostrar = document.getElementById('mostrar')

const btnFechar = document.getElementById('fechar')


/**
 * addEventListener é um método que te permite ouvir eventos do HTML pelo JavaScript
 */

/**
 * Se eu precisr passar uma função como parâmetro para outra, eu passo a referência dela, ou seja, a função sem os parenteses na frente.
 */
btnMostrar.addEventListener('click', mostrar)
btnFechar.addEventListener('click', fechar)