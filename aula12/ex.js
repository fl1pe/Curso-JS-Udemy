let a = 'A'; // B
let b = 'B'; // C
let c = 'C'; // A
console.log(a, b, c);

let copia = a;

a = b;
b = c;
c = copia;

console.log(a, b, c);

