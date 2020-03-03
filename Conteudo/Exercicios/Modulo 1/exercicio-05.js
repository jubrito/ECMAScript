
// REST 
const array = [1, 2, 3, 4, 5, 6];
const [ x, ...y ] = array;
console.log(x); // 1
console.log(y); // [2, 3, 4, 5, 6]

function soma (...params) {
    return params.reduce((total, next) => total + next);
}
console.log(soma(1, 2, 3, 4, 5, 6)); // 21
console.log(soma(1, 2)); // 3

// SPREAD:
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