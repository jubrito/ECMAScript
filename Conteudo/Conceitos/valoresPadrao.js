/* VALORES PADRÃO PROS PARÂMETROS DE FUNÇÕES */

function soma (a = 3, b = 6) {
    return a + b;
}

//a = 1 (novo), b = 6 (padrão) = retorna 7
console.log(soma(1));

//a = 3 (padrão), b = 6 (padrão) = retorna 9
console.log(soma());

/* ARROW FUNCTIONS */
const soma = (a=3, b=6) => a + b;