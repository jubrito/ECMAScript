// https://skylab.rocketseat.com.br/api/files/1566499229316.pdf
// https://github.com/joaooliveiradev/rocketseat-javascriptES6-exercicios/blob/master/exercicios-modulo-01/exercicio-03.js
console.log("-------------------------- EXERCICIO 1 --------------------------");
/* Para testar seus conhecimentos com classes, crie uma classe com nome "Admin", essa classe deve
extender uma segunda classe chamada "Usuario".
A classe usuário deve receber dois parâmetros no método construtor, e-mail e senha, e anotá-los
em propriedades da classe. A classe "Admin" por sua vez não recebe parâmetros mas deve
repassar os parâmetros de e-mail e senha à classe pai e marcar uma propriedade "admin" como
true na classe.
Agora com suas classes formatadas, adicione um método na classe Usuario chamado isAdmin que
retorna se o usuário é administrador ou não baseado na propriedade admin ser true ou não. */
console.log('EXERCICIO 1:');
class Usuario {
    constructor (email, senha) {
        this.email = email;
        this.senha = senha;
    }

    isAdmin(admin) {
        return this.admin === true;
    }
}

class Admin extends Usuario {
    constructor (email, senha){ 
        super();
        this.admin = true;
    }
}

const User1 = new Usuario('email@teste.com', 'senha123');
const Adm1 = new Admin('email@teste.com', 'senha123');
console.log(User1.isAdmin()) // false
console.log(Adm1.isAdmin()) // true



console.log("------------------------ EXERCICIO EXTRA  ------------------------");
class Bruxa { 
    constructor (nome, familiar, acessorio) {
        this.nome = nome;
        this.familiar = familiar;
        this.acessorio = acessorio;
        this.feiticos = [];
    }

    escreveFeiticoNoLivro(feitico){
        this.feiticos.push(feitico);
    }

    livroDeFeiticaria() {
        console.log("~~~~ FEITIÇOS ~~~~");
        console.log(this.feiticos);
        console.log("~~~~~~~~~~~~~~~~~~");
    }
}

class Humano extends Bruxa {
    constructor (nome, familia, acessorio) {
        super();
        this.informacoes = [this.nome, this.familia, this.acessorio];
        this.feiticos = [];
    }
}

const Bruxinha = new Bruxa("Sabrina", "Salem", "Cabelo");
const Ju = new Humano("Juliana", "Lucifer", "Chapeu");

var botaoAdicionar = document.querySelector('button.adicionar');
botaoAdicionar.onclick = function () {
    var inputText = document.querySelector('input[name=nome]').value;
    Bruxinha.escreveFeiticoNoLivro(inputText);
}

var botaoMostrarTodos = document.querySelector('button.mostrarTodos');
botaoMostrarTodos.onclick = function () {
    Bruxinha.livroDeFeiticaria();
}


console.log("-------------------------- EXERCICIO 2 --------------------------");
/*A partir do seguinte vetor e utilizando os métodos de array (map, reduce, filter e find):*/
console.log('EXERCICIO 2:');
const usuarios = [
    { nome: 'Diego', idade: 23, empresa: 'Rocketseat' },
    { nome: 'Gabriel', idade: 15, empresa: 'Rocketseat' },
    { nome: 'Lucas', idade: 30, empresa: 'Facebook' },
   ]; 
   
   // MAP: Crie uma variável que contenha todas idades dos usuários: 
   // [23, 15, 30]
   var idades = usuarios.map(users => users.idade); 
   console.log(idades);
   
   // FILTER: Crie uma variável que tenha apenas os usuários que trabalham na Rocketseat e com mais de 18 anos: 
   // [{ nome: 'Diego', idade: 23, empresa: 'Rocketseat' }]
   var funcionarios = usuarios.filter(users => users.idade > 18 && users.empresa === 'Rocketseat');
    console.log(funcionarios)
   
   // FIND: Crie uma variável que procura por um usuário que trabalhe na empresa Google:
   // undefined
   var googleiros = usuarios.find(users => users.empresa === 'Google');
   console.log(googleiros);

   // UNINDO OPERAÇÕES: Multiplique a idade de todos usuários por dois e depois realize um filtro nos 
   /*usuários que possuem no máximo 50 anos:
   [
    { nome: 'Diego', idade: 46, empresa: 'Rocketseat' },
    { nome: 'Gabriel', idade: 30, empresa: 'Rocketseat' },
   ]*/
   var uniao = usuarios.map(users => ({...users, idade: users.idade * 2})).filter(users => users.idade <= 50);
   console.log(uniao);



   console.log("-------------------------- EXERCICIO 3 --------------------------");
   /* Converta as funções nos seguintes trechos de código em Arrow Functions: */
   // 3.1
   const arr = [1, 2, 3, 4, 5];
   arr.map(function(item) {
    return item + 10;
   });
   // Arrow Function:
   var arrow1 = arr.map(item => item+10);
   console.log("Arrow 1: "+ arrow1);

   // 3.2 (Dica: Utilize uma constante pra function)
   const usuario = { nome: 'Diego', idade: 23 };
   function mostraIdadeAntigo(usuario) {
    return usuario.idade;
   }
   // Arrow Function:
   var mostraIdade = usuario => usuario.idade;
   console.log("Arrow 2: "+ mostraIdade(usuario));

   // 3.3 (Utilize uma constante pra function)
   const nome = "Diego";
   const idade = 23;
   function mostraUsuarioAntigo(nome = 'Diego', idade = 18) {
    return { nome, idade };
   }
    // Arrow Function:
   var mostraUsuario = (nome='Diego', idade = 18) => ({nome, idade});
   console.log("Arrow 3:"); 
   console.log(mostraUsuario(nome, idade));
   console.log(mostraUsuario(nome));

    // 3.4
    const promise = function() {
    return new Promise(function(resolve, reject) {
    return resolve();
    })
   }

   const arrowPromise = () => new Promise((resolve, reject) => resolve());



   console.log("-------------------------- EXERCICIO 4 --------------------------");
   // Desestruturação simples
   /* A partir do seguinte objeto:
    Utilize a desestruturação para transformar as propriedades nome, cidade e estado em variáveis */
    const empresa = {
        name: 'Rocketseat',
        address: {
        city: 'Rio do Sul',
        state: 'SC',
        }
    };
   var { name, address: { city, state } } = empresa;
   console.log(name); // Rocketseat
   console.log(city); // Rio do Sul
   console.log(state); // SC

   // Desestruturação em parâmetros
   /* Na seguinte função, utilize a desestruturação nos parâmetros da função para buscar 
   o nome e idade do usuário separadamente e a função poder retornar apenas: return `${nome} tem ${idade} anos.` */
    //    function mostraInfo(usuario) {
    //         return `${usuario.nome} tem ${usuario.idade} anos.`;
    //    }
    //    mostraInfo({ nome: 'Diego', idade: 23 })
   function mostraInfo({ nome, idade}) {
        return `${nome} tem ${idade} anos.`;
   }
   console.log(mostraInfo({ nome: 'Diego', idade: 23 }));
   


   console.log("-------------------------- EXERCICIO 5 --------------------------");
   // Utilizando o operador de rest/spread (...) realize as seguintes operações:
    /* REST:
    A partir do array, defina uma variável x que recebe a primeira
    posição do vetor e outra variável y que recebe todo restante dos dados. */
    const array = [1, 2, 3, 4, 5, 6];
    const [ x, ...y ] = array;
    console.log(x); // 1
    console.log(y); // [2, 3, 4, 5, 6]
    // Crie uma função que recebe inúmeros parâmetros e retorna a soma de todos eles:
    // function soma...
    function soma (...params) {
        return params.reduce((total, next) => total + next);
    }
    console.log(soma(1, 2, 3, 4, 5, 6)); // 21
    console.log(soma(1, 2)); // 3

    /* SPREAD:
    A partir do objeto e utilizando o operador spread: 
        - Crie uma variável usuario2 que contenha todos os dados do usuário porém com nome Gabriel.
        - Crie uma variável usuario3 que contenha todos os dados do usuário porém com cidade Lontras.*/
    const usuario1 = {
        nome: 'Diego',
        idade: 23,
        endereco: {
        cidade: 'Rio do Sul',
        uf: 'SC',
        pais: 'Brasil',
        }
    };
    const usuario2 = { nome: 'Gabriel', ...usuario1 };
    const usuario3 = { ...usuario1, endereco: {...usuario1.endereco, cidade: "Lontras"}} ;



    console.log("-------------------------- EXERCICIO 6 --------------------------");
    /* Converta o seguinte trecho de código utilizando Template Literals: */
    const nome_usuario = 'Diego';
    const num_idade = 23;
    console.log(`O usuário ${nome_usuario} possui ${num_idade} anos`);



    console.log("-------------------------- EXERCICIO 7 --------------------------");
    /* Utilize a sintaxe curta de objetos (Object Short Syntax) no seguinte objeto: */
    const apelido = 'Ju';
    const anos = 22;
    const pessoa = {
    apelido,
    anos,
    cidade: 'Rio do Sul',
    };   
    
    console.log(pessoa.apelido);