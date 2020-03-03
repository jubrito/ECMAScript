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

function mostraInfo({ nome, idade}) {
    return `${nome} tem ${idade} anos.`;
}
console.log(mostraInfo({ nome: 'Diego', idade: 23 }));