// https://codeshare.com.br/implementando-heranca-em-javascript/

class List {
    //primeiro metodo executado toda vez que instanciarmos um objeto a partir dessa classe
    constructor() {
        this.data = []; //inicia variavel
    }

    add(data) {
        this.data.push(data); //adiciona a data recebida e coloca no final da lista
        console.log(this.data);
    }
}

class TodoList extends List {
    constructor(){
        super();

        this.usuario = 'Juliana';
    }

    mostraUsuario() {
        console.log(this.usuario);
    }
}


//Criar variável que vai armazenar uma nova todoList
const MinhaLista = new TodoList();

//Pega o botao com id "botao" que quando clicarmos executara a funcao
document.querySelector('button.adicionar').onclick = function() {
    MinhaLista.add('Novo todo');
}

MinhaLista.mostraUsuario();