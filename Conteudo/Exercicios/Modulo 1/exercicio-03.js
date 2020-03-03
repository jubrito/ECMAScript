   // 3.1
   const arr = [1, 2, 3, 4, 5];
   arr.map(function(item) {
    return item + 10;
   });
   // Arrow Function:
   var arrow1 = arr.map(item => item+10);
   console.log("Arrow 1: "+ arrow1);

   // 3.2 (Dica: Utilize uma constante pra function)
   const usuario = { nome: 'Diego', idade: 23 };
   function mostraIdadeAntigo(usuario) {
    return usuario.idade;
   }
   // Arrow Function:
   var mostraIdade = usuario => usuario.idade;
   console.log("Arrow 2: "+ mostraIdade(usuario));


   // 3.3 (Utilize uma constante pra function)
   const nome = "Diego";
   const idade = 23;
   function mostraUsuarioAntigo(nome = 'Diego', idade = 18) {
    return { nome, idade };
   }
    // Arrow Function:
   var mostraUsuario = (nome='Diego', idade = 18) => ({nome, idade});
   console.log("Arrow 3:"); 
   console.log(mostraUsuario(nome, idade));
   console.log(mostraUsuario(nome));

   // 3.4
    const promise = function() {
    return new Promise(function(resolve, reject) {
    return resolve();
    })
   }

   const arrowPromise = () => new Promise((resolve, reject) => resolve());