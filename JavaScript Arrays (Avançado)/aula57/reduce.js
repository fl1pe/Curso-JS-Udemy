/**
 * Diferente de filter e map, o reduce recebe como 1º parâmetro um acumulador
 */

const numeros = [5, 50, 80, 1, 2, 3, 5, 8, 7, 11, 15, 22, 27];

const total = numeros.reduce((acumulador, valor, indice, array) => {
  acumulador += valor;
  return acumulador;
});
//console.log(total)

// Retorne a pessoa mais velha
const pessoas = [
  { nome: "Felipe", idade: 22 },
  { nome: "Alana", idade: 21 },
  { nome: "Luiz", idade: 62 },
  { nome: "Eduardo", idade: 90},
  { nome: "Letícia", idade: 19 },
  { nome: "Jean", idade: 80 },
  { nome: "Wallace", idade: 81 },
];
const maiorIdade = pessoas.reduce(function(acumulador, valor){
    if (acumulador.idade > valor.idade) return acumulador;
    return valor
});
console.log(maiorIdade)