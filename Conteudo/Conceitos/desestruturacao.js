/* DESESTRUTURAÇÃO DE OBJETOS */
const usuario = {
    nome: 'Juliana',
    idade: 22,
    endereco: {
        cidade: 'Sao Paulo',
        estado: 'SP'
    },
};

// Antes do = quais variáveis estamos buscando, depois do = o nome do objeto
const { nome, idade, endereco: { cidade } } = usuario;
console.log(nome);
console.log(idade);
console.log(cidade);

// Podemos passar no parâmetro utilizando a desestruturação, definindo um objeto no parâmetro
function mostraNome({ nome, idade }) {
    console.log(usuario.nome);
}

mostraNome(usuario);