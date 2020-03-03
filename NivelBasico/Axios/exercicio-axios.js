/* AXIOS: Encapsulamento (Wrapping) do XMLHTTPRequest */
axios.get('https://api.github.com/users/jubrito')
//axios('https://api.github.com/users/jubrito') default calls ge

.then(function(response) {
    console.log(response.data.avatar_url);
})
.catch(function(error) {
    console.warn(error);
});

/* O que faziamos no AJAX com o XMLHTTPRequest retornava o campo "data" e agora temos:
   Com um "console.log(response) visualizamos:"
    - DATA: infos da API
    - STATUS: 200 se ok
    - REQUEST: XMLHTTPRequest com os campos readyState (se 200 ok) */

//https://skylab.rocketseat.com.br/api/files/1566499182493.pdf

