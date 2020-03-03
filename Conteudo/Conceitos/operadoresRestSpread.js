/* OPERADORES REST/SPREAD */

//---------------------------------- REST ----------------------------------*/
// Pegar o resto das propriedades, de uma desestruturação, de uma passagem de parâmetro, etc

//OBJETOS  ~~~~~~~
const usuario =  {
    nome: 'Juliana',
    idade: 22,
    empresa: "F5"
}
const { nome, ...resto } = usuario;
console.log(nome);
console.log(resto); // tudo o que não usamos no objeto (idade, empresa)

//ARRANJOS ~~~~~~~
const arr = [1, 2, 3, 4];
const [a, b, ...c] = arr;
console.log(a);
console.log(b);
console.log("Resto: "+ c);

//PARÂMETROS ~~~~~~~
function soma (a, b) {
    return a + b;
}
// Se tentassemos adicionar um outro parâmetro precisariamos acrescentar c no parâmetro, no return e na hora de chamar a função
// Podemos pegar todos os parâmetros usando o REST, que os converte em formato de array

function soma2(...params) {
    // return params;
    return params.reduce((total, next) => total + next); // Soma os parâmetros usando o "REDUCE"
}

console.log(soma2(1, 3, 4));

// Utilizando a lógica de resto
function soma3 (a, b, ...params) {
    return params; // retornará apenas o número 4
}
console.log(soma3(1, 3, 4));




//--------------------------------- SPREAD ---------------------------------*/
// Propaga/repassa as informações de um objeto ou array para outra estrutura de dados
const arr1 = [1, 2, 3];
const arr2 = [4, 5, 6];

const arr3 = [ ...arr1, ...arr2 ]; // [...arr1, ...arr2] = [1, 2, 3, 4, 5, 6]

console.log(arr3);

// Criar um novo usuário com as mesmas propriedades alterando o valor que quisermos
const usuario1 = {
    nome: "Juliana",
    idade: 23,
    empresa: "F5"
};

const usuario2 = { ...usuario1, nome: "Erick", idade: 24};

console.log(usuario2);

