var listElement = document.querySelector('#app ul');
var inputElement = document.querySelector('#app input');
var buttonElement = document.querySelector('#app button');

//pega a lista de todos do localStorage e converte pra JSON
var todos = JSON.parse(localStorage.getItem('list_todos')) || [];
//define um array como valor padrao caso nao pegue um valor aceitavel do JSON.parse


/* Quando usamos apenas um array estatico nao conseguimos preservar alteações
após o recarregamento da página
 var todos = [ 
     //{text: 'Fazer café', propriedade: 1},  poderia ser um array de objetos
     'Trocar tenis Vans',
     'Resolver coisas do aniversario',
     'Formatar celular'
 ];
 */

 //Função para renderizar os todos em tela na nossa lista
function renderTodos() {
    listElement.innerHTML = '';     /* tudo o que estiver dentro da ul colocar vazio, 
                                    pra quando adicionarmos um novo nao repetir os antigos na tela */

    for (todo of todos) {
        var todoElement = document.createElement('li'); 
        var todoText = document.createTextNode(todo); //a variavel todo contem o texto de cada todo

        var linkElement = document.createElement('a'); //cria link
        
        linkElement.setAttribute('href', '#'); //coloca o link obrigatório no link excluir

        var pos = todos.indexOf(todo); //pega o indice do todo 
        linkElement.setAttribute('onclick', 'deleteTodo(' + pos + ')'); //passando o pos como parametro 

        var linkText = document.createTextNode('Excluir');

        linkElement.appendChild(linkText); //coloca o texto excluir no link excluir

        todoElement.appendChild(todoText);
        todoElement.appendChild(linkElement); //adiciona o link excluir em cada item
        listElement.appendChild(todoElement);
    }
}

renderTodos();

function addTodo() {
    var todoText = inputElement.value; //valor do input
    todos.push(todoText); //adicionamos no final do arranjo 'todos'
    inputElement.value = ''; //apaga o valor atual do input
    renderTodos(); //chama a função para rendererizar elementos em tela
    saveToStorage(); //salva preservando alterações mesmo depois de atualizar a página
}

buttonElement.onclick = addTodo; //quando clicamos no botão "adicionar", adiciona elemento do input no todos


function deleteTodo(pos) {
    todos.splice(pos, 1); //(posicao, NItensASeremRemovidosAPartirDaquelaPosicao) ex: (0, 1) va na posicao 0, e remova 1 item 
    renderTodos(); 
    saveToStorage(); //salva preservando alterações mesmo depois de atualizar a página
}

function saveToStorage() {
    localStorage.setItem('list_todos', JSON.stringify(todos)); /* se tentassemos passar 'todos' nao teria como porque nao aceita arrays,
                                                                por isso podemos converter pra  JSON (JavaScript Object Notation) que tem 
                                                                estrutura muito parecida com um objeto no JS porém é uma string */
}

