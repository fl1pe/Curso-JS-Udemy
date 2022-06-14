/* Valores primitivos e valores por referência

Primitivos (imutável)  - string, number, boolean, undefined, 
null ( bigint, symbol) - Valores copiados

Referência (mutável) - array, object, function - Passados por referênciae
 */


let a = [1, 2, 3];
let b = a;
console.log(a);

a.push(4, 6);
console.log(a, b);