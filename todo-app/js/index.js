/**
 * métodos de recuperação de elementos HTML
 */

// recupera elementos HTML  a partir do nome da tag
const todoForm = document.getElementById('todo-form')
const todos = []

//addEventListener serve para ouvir eventos do elementos HTML sempre que foram emitidos

            //ADICIONAR OUVIDOR DE EVENTOS
todoForm .addEventListener('submit', function(event){


/**
 * cancela o comportameno padrão de um formulario 
 * que seria o recarregamento da página tentando fazer seu evio
 */
   event.preventDefault()



  /**
   * cancela a propagação do evento que foi emitido para os elementos pai,
   * evitando que outros eventos sejam emitidos
   */
   event.stopPropagation()


    /**
     * QuerySelector : recupera o primeiro elemento que atende
     * a um  seletor css informado
     */
    const todoInput = document.querySelector('#todo')
    todoInput.value



    /**
     * a propriedade value é uma propriedade que recupera o atributo  value
     * dos elementos de formulario HTML, para acessarmos o valor que está dentro deles
     */
        todos.push(todoInput.value)
        todoInput.value = ''
        renderizarTodos( ) 
})
    
function renderizarTodos() {
    const todoListSection = document.querySelector('#todos-list')

    for (let tarefa of todos) {
        /**
         * createElement é o método responsável por gerar novos elementos
         * HTML dentro do JavaScript a partir do nome das tags
         */
       const divCard =document.createElement('div')
       divCard.classList.add('card', 'bg-warning')
       
       const divCardBody = document.createElement('div')
       divCardBody.classList.add('card-body', 'd-flex', 'align-items-center')
       
       const pTodoTexto= document.createElement('p')
       pTodoTexto.classList.add('todo-text', 'flex-grow-1', 'text-truncate')
       /**
        * innerText é a propriedade que informa qual o contéudo de texto que está dentro de um
        * elemento HTML
        */
       pTodoTexto.innerText = tarefa;

       const btnDelete = document.createElement('button')
       btnDelete.classList.add('btn','delete-todo')

       const spanIcon = document.createElement('span')
       spanIcon.classList.add('material-symbols-outlined')
       spanIcon.innerText = 'delete'
/**
 * appendChild serve para colocar novos elementos HTML dentro de outros  EX: btnDelete  virou PAI de spanIcon
 */
/**
 * append serve para colocar um ou mais elementos HTML dentro de outro 
 */
       btnDelete.appendChild(spanIcon)
       divCardBody.append(pTodoTexto, btnDelete)
       divCard.appendChild(divCardBody)

       todoListSection.appendChild(divCard)
    }
}