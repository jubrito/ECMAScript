"use strict";

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

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

var Usuario = /*#__PURE__*/function () {
  function Usuario(email, senha) {
    _classCallCheck(this, Usuario);

    this.email = email;
    this.senha = senha;
  }

  _createClass(Usuario, [{
    key: "isAdmin",
    value: function isAdmin(admin) {
      return this.admin === true;
    }
  }]);

  return Usuario;
}();

var Admin = /*#__PURE__*/function (_Usuario) {
  _inherits(Admin, _Usuario);

  function Admin(email, senha) {
    var _this;

    _classCallCheck(this, Admin);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(Admin).call(this));
    _this.admin = true;
    return _this;
  }

  return Admin;
}(Usuario);

var User1 = new Usuario('email@teste.com', 'senha123');
var Adm1 = new Admin('email@teste.com', 'senha123');
console.log(User1.isAdmin()); // false

console.log(Adm1.isAdmin()); // true

console.log("------------------------ EXERCICIO EXTRA  ------------------------");

var Bruxa = /*#__PURE__*/function () {
  function Bruxa(nome, familiar, acessorio) {
    _classCallCheck(this, Bruxa);

    this.nome = nome;
    this.familiar = familiar;
    this.acessorio = acessorio;
    this.feiticos = [];
  }

  _createClass(Bruxa, [{
    key: "escreveFeiticoNoLivro",
    value: function escreveFeiticoNoLivro(feitico) {
      this.feiticos.push(feitico);
    }
  }, {
    key: "livroDeFeiticaria",
    value: function livroDeFeiticaria() {
      console.log("~~~~ FEITIÇOS ~~~~");
      console.log(this.feiticos);
      console.log("~~~~~~~~~~~~~~~~~~");
    }
  }]);

  return Bruxa;
}();

var Humano = /*#__PURE__*/function (_Bruxa) {
  _inherits(Humano, _Bruxa);

  function Humano(nome, familia, acessorio) {
    var _this2;

    _classCallCheck(this, Humano);

    _this2 = _possibleConstructorReturn(this, _getPrototypeOf(Humano).call(this));
    _this2.informacoes = [_this2.nome, _this2.familia, _this2.acessorio];
    _this2.feiticos = [];
    return _this2;
  }

  return Humano;
}(Bruxa);

var Bruxinha = new Bruxa("Sabrina", "Salem", "Cabelo");
var Ju = new Humano("Juliana", "Lucifer", "Chapeu");
var botaoAdicionar = document.querySelector('button.adicionar');

botaoAdicionar.onclick = function () {
  var inputText = document.querySelector('input[name=nome]').value;
  Bruxinha.escreveFeiticoNoLivro(inputText);
};

var botaoMostrarTodos = document.querySelector('button.mostrarTodos');

botaoMostrarTodos.onclick = function () {
  Bruxinha.livroDeFeiticaria();
};

console.log("-------------------------- EXERCICIO 2 --------------------------");
/*A partir do seguinte vetor e utilizando os métodos de array (map, reduce, filter e find):*/

console.log('EXERCICIO 2:');
var usuarios = [{
  nome: 'Diego',
  idade: 23,
  empresa: 'Rocketseat'
}, {
  nome: 'Gabriel',
  idade: 15,
  empresa: 'Rocketseat'
}, {
  nome: 'Lucas',
  idade: 30,
  empresa: 'Facebook'
}]; // MAP: Crie uma variável que contenha todas idades dos usuários: 
// [23, 15, 30]

var idades = usuarios.map(function (users) {
  return users.idade;
});
console.log(idades); // FILTER: Crie uma variável que tenha apenas os usuários que trabalham na Rocketseat e com mais de 18 anos: 
// [{ nome: 'Diego', idade: 23, empresa: 'Rocketseat' }]

var funcionarios = usuarios.filter(function (users) {
  return users.idade > 18 && users.empresa === 'Rocketseat';
});
console.log(funcionarios); // FIND: Crie uma variável que procura por um usuário que trabalhe na empresa Google:
// undefined

var googleiros = usuarios.find(function (users) {
  return users.empresa === 'Google';
});
console.log(googleiros); // UNINDO OPERAÇÕES: Multiplique a idade de todos usuários por dois e depois realize um filtro nos 

/*usuários que possuem no máximo 50 anos:
[
 { nome: 'Diego', idade: 46, empresa: 'Rocketseat' },
 { nome: 'Gabriel', idade: 30, empresa: 'Rocketseat' },
]*/

var uniao = usuarios.map(function (users) {
  return _objectSpread({}, users, {
    idade: users.idade * 2
  });
}).filter(function (users) {
  return users.idade <= 50;
});
console.log(uniao);
console.log("-------------------------- EXERCICIO 3 --------------------------");
/* Converta as funções nos seguintes trechos de código em Arrow Functions: */
// 3.1

var arr = [1, 2, 3, 4, 5];
arr.map(function (item) {
  return item + 10;
}); // Arrow Function:

var arrow1 = arr.map(function (item) {
  return item + 10;
});
console.log("Arrow 1: " + arrow1); // 3.2 (Dica: Utilize uma constante pra function)

var usuario = {
  nome: 'Diego',
  idade: 23
};

function mostraIdadeAntigo(usuario) {
  return usuario.idade;
} // Arrow Function:


var mostraIdade = function mostraIdade(usuario) {
  return usuario.idade;
};

console.log("Arrow 2: " + mostraIdade(usuario)); // 3.3 (Utilize uma constante pra function)

var nome = "Diego";
var idade = 23;

function mostraUsuarioAntigo() {
  var nome = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 'Diego';
  var idade = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 18;
  return {
    nome: nome,
    idade: idade
  };
} // Arrow Function:


var mostraUsuario = function mostraUsuario() {
  var nome = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 'Diego';
  var idade = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 18;
  return {
    nome: nome,
    idade: idade
  };
};

console.log("Arrow 3:");
console.log(mostraUsuario(nome, idade));
console.log(mostraUsuario(nome)); // 3.4

var promise = function promise() {
  return new Promise(function (resolve, reject) {
    return resolve();
  });
};

var arrowPromise = function arrowPromise() {
  return new Promise(function (resolve, reject) {
    return resolve();
  });
};

console.log("-------------------------- EXERCICIO 4 --------------------------"); // Desestruturação simples

/* A partir do seguinte objeto:
 Utilize a desestruturação para transformar as propriedades nome, cidade e estado em variáveis */

var empresa = {
  name: 'Rocketseat',
  address: {
    city: 'Rio do Sul',
    state: 'SC'
  }
};
var name = empresa.name,
    _empresa$address = empresa.address,
    city = _empresa$address.city,
    state = _empresa$address.state;
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

function mostraInfo(_ref) {
  var nome = _ref.nome,
      idade = _ref.idade;
  return "".concat(nome, " tem ").concat(idade, " anos.");
}

console.log(mostraInfo({
  nome: 'Diego',
  idade: 23
}));
console.log("-------------------------- EXERCICIO 5 --------------------------"); // Utilizando o operador de rest/spread (...) realize as seguintes operações:

/* REST:
A partir do array, defina uma variável x que recebe a primeira
posição do vetor e outra variável y que recebe todo restante dos dados. */

var array = [1, 2, 3, 4, 5, 6];
var x = array[0],
    y = array.slice(1);
console.log(x); // 1

console.log(y); // [2, 3, 4, 5, 6]
// Crie uma função que recebe inúmeros parâmetros e retorna a soma de todos eles:
// function soma...

function soma() {
  for (var _len = arguments.length, params = new Array(_len), _key = 0; _key < _len; _key++) {
    params[_key] = arguments[_key];
  }

  return params.reduce(function (total, next) {
    return total + next;
  });
}

console.log(soma(1, 2, 3, 4, 5, 6)); // 21

console.log(soma(1, 2)); // 3

/* SPREAD:
A partir do objeto e utilizando o operador spread: 
    - Crie uma variável usuario2 que contenha todos os dados do usuário porém com nome Gabriel.
    - Crie uma variável usuario3 que contenha todos os dados do usuário porém com cidade Lontras.*/

var usuario1 = {
  nome: 'Diego',
  idade: 23,
  endereco: {
    cidade: 'Rio do Sul',
    uf: 'SC',
    pais: 'Brasil'
  }
};

var usuario2 = _objectSpread({
  nome: 'Gabriel'
}, usuario1);

var usuario3 = _objectSpread({}, usuario1, {
  endereco: _objectSpread({}, usuario1.endereco, {
    cidade: "Lontras"
  })
});

console.log("-------------------------- EXERCICIO 6 --------------------------");
/* Converta o seguinte trecho de código utilizando Template Literals: */

var nome_usuario = 'Diego';
var num_idade = 23;
console.log("O usu\xE1rio ".concat(nome_usuario, " possui ").concat(num_idade, " anos"));
console.log("-------------------------- EXERCICIO 7 --------------------------");
/* Utilize a sintaxe curta de objetos (Object Short Syntax) no seguinte objeto: */

var apelido = 'Ju';
var anos = 22;
var pessoa = {
  apelido: apelido,
  anos: anos,
  cidade: 'Rio do Sul'
};
console.log(pessoa.apelido);
