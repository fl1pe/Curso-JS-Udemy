// Escrever uma função que recebe 2 números e retorne o maior deles

// Forma 01
function max(x, y) {
    return x > y ? x : y;
}

const testeFuncao = max(25, 10);
console.log(testeFuncao);

// Forma 02
const max2 = (x, y) => x > y ? x : y;