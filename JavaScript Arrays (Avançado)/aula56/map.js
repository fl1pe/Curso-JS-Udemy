// Mapeando um array

/**
 * Dobre os números
 */
const numeros = [5, 50, 80, 1, 2, 3, 5, 8, 7, 11, 15, 22, 27];
const numerosEmDobro = numeros.map((valor) => valor * 2);
//console.log(numerosEmDobro)

/**
 * Para cada elemento:
 * Retorne apenas uma string com o nome da pessoa
 * Remova apenas a chave "nome" do objeto
 * Adcione uma chave id em cada objeto
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
// Retorne apenas uma string com o nome da pessoa
const nomes = pessoas.map(obj => obj.nome);

// Retorne apenas uma string com o nome da pessoa
const idades = pessoas.map(obj => ({idade:obj.idade}));

// Adcione uma chave id em cada objeto
const id = pessoas.map((obj, indice) =>{
    obj.id = (indice + 1) * 1024
    return obj
})
console.log(pessoas)
