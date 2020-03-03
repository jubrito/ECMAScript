const arr = [1, 3, 4, 5, 6];

/* ARROW FUNCTIONS */
// Utilizada em funções anônimas e principalmente em call backs (funções que são passadas no parâmetro de outras funções)
// Remover o "function" e colocar seta depois do parâmetro
// Se a função recebe apenas um parâmetro podemos remover o parênteses na frente dele
// Se o retorno for apenas uma linha podemos remover o return e colocar após a seta
const newArr = arr.map(item => item * 2);

console.log(newArr);

// Para retornarmos objetos sem o "return", colocar parênteses em volta
const teste = () => ({ nome: 'Objeto' });

console.log(teste());
