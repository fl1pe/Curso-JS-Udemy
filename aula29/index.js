// Diferenças entre var, let e const

const verdadeiro = true;

/*
Let tem escopo de bloco, por isso nome = 'Bezerra' será exibido,
diferente de Let, Var só tem escopo de função
*/

// let nome = 'Felipe'; //criando
// var nome2 = 'Sousa';

// if (verdadeiro) {
//     let nome = 'Bezerra'; //criando
//     var nome2 = 'Outra coisa'; // Redeclarada

//     console.log(nome, nome2);
// }

/* Funções tem acesso as variáveis de fora do seu escopo,
mas as variavéis de dentro da função são protegidas, assim
o escopo glogal não tem acesso a elas
*/

// function falaOi (){
//     var nome = 'Felipe';
//     var sobrenome = 'Bezerra';
//     console.log(nome, sobrenome);
// }
// falaOi();

console.log(numero);

let numero = 100;