/* OBJECT SHORT SYNTEX */
// Quando precisamos repassar informações dentro de um objeto com o mesmo nome, podemos retirar o nome
const nome = "Juliana";
const idade = 22;

const usuario = {
    nome: nome,
    idade: idade,
    empresa: "F5"
}

const usuarioShortSyntex = {
    nome,
    idade,
    empresa: "F5"
}

console.log(usuarioShortSyntex);