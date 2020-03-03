const arr = [1, 3, 4, 5, 8, 10];

/* FUNÇÃO MAP */
// Recebe como parâmetro uma função que recebe cada item do array executando determinada ação
// const newArr = arr.map(item => item *2;);
// Podemos passar apenas o item no parâmetro ou o item e o index
// 2, 6, 8, 10, 16, 20
const newArr = arr.map(function(item, index) {
    return item * 2;
});

console.log(newArr);

/* FUNÇÃO REDUCE */
// Consome o vetor transformando-o em uma única informaçao
// A cada iteração total soma o item i (que começa no 0) e next é o proximo item
// (total, next): 0,1 / 1,3 / 4,4 / 8,5 / 13,8 / 21,10 / 31,0 = return total+next = 31
const sum = arr.reduce(function(total, next) {
    return total + next;
});

console.log(sum);

/* FUNÇÃO FILTER */
// Deve retornar TRUE: identificando se o item deverá estar no novo array ou FALSE: se ele precisar ser filtrado (removido)
// 2, 4
const filter = arr.filter(function(item) {
    return item % 2 === 0;
});

console.log(filter);

/* FUNÇÃO FIND */
// Verifica se existe uma informação dentro do array e se ela pode ser encontrada
// Retorna o item ou undefined 
const find = arr.find(function(item) {
    return item === 4;
});

