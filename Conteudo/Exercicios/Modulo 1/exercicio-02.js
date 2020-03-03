const usuarios = [
    { nome: 'Diego', idade: 23, empresa: 'Rocketseat' },
    { nome: 'Gabriel', idade: 15, empresa: 'Rocketseat' },
    { nome: 'Lucas', idade: 30, empresa: 'Facebook' },
]; 
   
   var idades = usuarios.map(users => users.idade); 
   console.log(idades);
   
   var funcionarios = usuarios.filter(users => users.idade > 18 && users.empresa === 'Rocketseat');
    console.log(funcionarios)
   
   var googleiros = usuarios.find(users => users.empresa === 'Google');
   console.log(googleiros);

   var uniao = usuarios.map(users => ({...users, idade: users.idade * 2})).filter(users => users.idade <= 50);
   console.log(uniao);