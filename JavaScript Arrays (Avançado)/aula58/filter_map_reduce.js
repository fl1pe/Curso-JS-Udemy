/**
 * Retorne a soma do dobro de todos os pares
 * -> Filtrar pares
 * -> Dobrar os valores
 * -> Reduzir (somar tudo)
 */
const numeros = [5, 50, 80, 1, 2, 3, 5, 8, 7, 11, 15, 22, 27];
const numerosPares = numeros
  .filter((valor) => valor % 2 === 0)
  .map(valor => valor * 2)
  .reduce((acumulador, valor) => (acumulador += valor));

// [ 50, 80, 10, 2, 8, 22 ] Pares
//[ 100, 160, 20, 4, 16, 44 ] Dobro
// 324 Soma tudo
console.log(numerosPares);
