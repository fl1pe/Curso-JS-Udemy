// Método splice
//frutas.splice(índice, delete, elem1, eleme2, elem3)

//                  0       1       2        3         4
const frutas = ["Banana", "Uva", "Melao", "Pêra", "Cajá"];

//frutas.splice(frutas.length -1, 1); // Equivale a frutas.pop();

//frutas.splice(frutas.length, 0, 'Abacaxi'); // Equivale a frutas.push();

//frutas.splice(0, 1); // Equivale a frutas.shift()

frutas.splice(0, 0, 'Abacate'); // Equivale a frutas.unshift()

console.log(frutas);
