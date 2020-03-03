/*~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ (EXERCICIO 1) ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~*/
/*Crie uma função que recebe a idade de um usuário e retorna uma Promise que depois de 2
segundos retornará se usuário é maior ou não que 18 anos. Se o usuário ter mais que 18 anos de
idade o resultado deve cair no .then, caso contrário, no .catch*/

/* AXIOS: Encapsulamento (Wrapping) do XMLHTTPRequest */
//axios('https://api.github.com/users/jubrito') default calls get
function checaIdade(idade) {
    return new Promise(function(resolve, reject) {
        if (idade>=18) {
            setTimeout(() => {
                resolve(idade);
            }, 2000);
        } else {
            reject('Erro na requisicao');
        }
    });
};



checaIdade(17)
 .then(function(response) {
 console.log("Maior que 18");
 })
 .catch(function(error) {
 console.log("Menor que 18");
 });

//https://github.com/josemalcher/rocketseat-Curso-JavaScript

