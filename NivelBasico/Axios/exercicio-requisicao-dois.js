/*~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ (EXERCICIO 2) ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~*/
/*Crie uma tela com um <input> que deve receber o nome de um usuário no Github. Após digitar o
nome do usuário e clicar no botão buscar a aplicação deve buscar pela API do Github (conforme
URL abaixo) os dados de repositórios do usuário e mostrá-los em tela:
URL de exemplo: https://api.github.com/users/jubrito/repos 

Depois de preencher o input e adicionar, a seguinte lista deve aparecer abaixo:
<ul>
 <li>repo1</li>
 <li>repo2</li>
 <li>repo3</li>
 <li>repo4</li>
 <li>repo5</li>
</ul>*/

/*~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ (EXERCICIO 3) ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~*/
/*A partir do resultado do exemplo anterior adicione um indicador de carregamento em tela no lugar
da lista apenas enquanto a requisição estiver acontecendo:
<li>Carregando...</li>
Além disso, adicione uma mensagem de erro em tela caso o usuário no Github não exista.
Dica: Quando o usuário não existe, a requisição irá cair no .catch com código de erro 404. */
var ul = document.querySelector('div.lista ul');
var item = document.createElement('li');
var itemText = document.createTextNode('');

function refreshRepos() {
    while (ul.firstChild) {
        ul.removeChild(ul.firstChild);
      }
}

function renderLoading(loading) {
    itemText.nodeValue = 'Carregando...';
    item.appendChild(itemText);
    if (loading == true) {
        ul.style.listStyleType = "none";
        ul.appendChild(item);
    } else {
        ul.style.listStyleType = "disc";
        ul.removeChild(item);
    }
}


async function exibirEmTela(repositorios){
    var repos = await repositorios;

    refreshRepos();
    for (var i=0; i<repos.length; i++){
        var item = document.createElement('li');
        var itemText = document.createTextNode(repos[i]);
        item.appendChild(itemText);
        ul.appendChild(item); 
    }
}

async function renderError(erro) {
    refreshRepos();
    itemText.nodeValue = 'Erro 404: user not found';
    item.style.color='#f00';
    if (erro == true) {
        ul.style.listStyleType = "none";
        ul.appendChild(item);
    } else {
        ul.style.listStyleType = "disc";
        // ul.removeChild(item);
    }
}

async function getReposName(reposArray) {
    renderLoading(false);
    var reposNames = [];
    for (var i=0; i<reposArray.length; i++) {
        reposNames[i] = reposArray[i].name;
    }
    return reposNames;
}

async function adicionarUsuario() {
    var user = document.querySelector('input[name=user]').value;
    if (!user) return;
    // var repositorios = "";
    renderLoading(true);
    try {
        const response = await axios.get(`https://api.github.com/users/${user}/repos`);
        // repositorios = (await getReposName(response)).join([separador=', ']);
        // console.log("Repositorios: "+repositorios);
        var repositorios = getReposName(response.data);
        exibirEmTela(repositorios);
        renderError(false);
    } catch (error) {
        renderError(true);
    }
}

// FONTE: https://github.com/Rocketseat/starter-javascript-exercicios/blob/master/M%C3%B3dulo%2003/03.html
// var listElement = document.querySelector('ul');
// var inputElement = document.querySelector('input');

// function renderRepositories(repositories) {
//   listElement.innerHTML = "";
//   for (repo of repositories) {
//     const textElement = document.createTextNode(repo.name);
//     const liElement = document.createElement('li');
//     liElement.appendChild(textElement);
//     listElement.appendChild(liElement);
//   }
// }
// function renderLoading(loading) {
//   listElement.innerHTML = "";
//   var textElement = document.createTextNode('Carregando...');
//   var loadingElement = document.createElement('li');
//   loadingElement.appendChild(textElement);
//   listElement.appendChild(loadingElement);
// }
// function renderError(loading) {
//   listElement.innerHTML = "";
//   var textElement = document.createTextNode('Erro!');
//   var errorElement = document.createElement('li');
//   errorElement.style.color = "#F00";
//   errorElement.appendChild(textElement);
//   listElement.appendChild(errorElement);
// }
// function listRepositories() {
//   var user = inputElement.value;
//   if (!user) return;
//   renderLoading();
//   axios.get('https://api.github.com/users/' + user + '/repos')
//     .then(function (response) {
//       renderRepositories(response.data);
//     })
//     .catch(function () {
//       renderError();
//     });
// }