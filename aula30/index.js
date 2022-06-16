/*
Atribuição via desestruturação (Arrays)
*/

// let a = 'A'; // B
// let b = 'B'; // C
// let c = 'C'; // A

// const letras = [b, c, a];

// [a, b, c] = [letras];

// console.log(a);

const frutas = ['Banana', 'Maçã', 'Abacate', 'Uva', 'Morango', 'Pêra', 'Abacaxi'];

const [fruta1, fruta2, ...fruta3] = frutas;
//console.log(fruta1, fruta2);

const numeros = [
    [1, 2, 3], [4, 5, 6], [7, 8, 9]
];
//const [, [,,seis]] = numeros;
const [lista1, lista2, lista3] = numeros;

console.log(lista3[2]);