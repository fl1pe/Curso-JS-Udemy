// Funções

// Quando declarada dessa maneira, não é necessário usar ; no final
function soma(x, y) {
    if (x && y === Number) {
        const resu =  'Número inválido!';
        return resu
    }else {
        return x + y
    }
}

// console.log(soma('c',2))
// let num1 = 34;
// let num2 = 2;

// let resu = soma(num1, num2);
// console.log(resu);

function saudacao() {
    console.log('Bom dia Dev!')
}

function raizQ(x) {
   const raiz = x ** 0.5;
   return raiz.toFixed(2);
}

// console.log(raizQ(78));

// Quando declarada dessa maneira, é necessário usar ; no final
const raiz = function (x){
    return x ** 0.5;
};
// console.log(raiz(190));


/**
 * Arrow function quando tiver apenas um argumento o parentênse é
 * eliminado e return também.
 * forma padrão:
 * const soma = (x, y) => {
 *  return x + y;
 * }
 * EX:
 * const raiz2 = x => x ** 0.5;
 */ 
const raiz2 = x =>  x ** 0.5;
console.log(raiz2(100));

const soma2 = (x, y) => {
    return x + y;
}

console.log(soma2(23, 2))