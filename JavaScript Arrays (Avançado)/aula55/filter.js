/**
 * Filter vai sempre retornar um array, com a mesma quantidade de elementos ou menos.
 */

const numeros = [5, 50, 80, 1, 2, 3, 5, 8, 7, 11, 15, 22, 27];

// Retorne os números maiores que dez em outro array

// // 1ª forma de resolver
// const numerosFiltrados = [];
// for (let i of numeros) {
//     if (i > 10) numerosFiltrados.push(i);
// }

// 2ª forma de resolver
// function callbackFilter(valor){
//     return valor > 10;
// }
//const numerosFiltrados = numeros.filter(callbackFilter);

// // 3ª forma de resolver
//const numerosFiltrados = numeros.filter(valor => valor > 10);

//console.log(numerosFiltrados);

/**
 * Retorne as pessoas que tem o nome com 5 letras ou mais.
 * Retorne as pessoas com mais de 50 anos.
 * Retorne as pessoas cujo nome termina com "a".
 */
const pessoas = [
  { nome: "Felipe", idade: 22 },
  { nome: "Alana", idade: 21 },
  { nome: "Luiz", idade: 62 },
  { nome: "Eduardo", idade: 55 },
  { nome: "Letícia", idade: 19 },
  { nome: "Jean", idade: 32 },
  { nome: "Wallace", idade: 47 },
];
// // Retorne as pessoas que tem o nome com 5 letras ou mais.
const pessoasNomesGrande = pessoas.filter(obj => obj.nome.length >= 7);
console.log(pessoasNomesGrande)

// //Retorne as pessoas com mais de 50 anos.
const pessoasIdadeMaior50 = pessoas.filter((obj) => obj.idade > 50);
console.log(pessoasIdadeMaior50);

// Retorne as pessoas cujo nome termina com "a"
const nomeTerminaA = pessoas.filter(obj => obj.nome[obj.nome.length -1] == 'a');
console.log(nomeTerminaA)
