/* return
1 - retorna a função
2 - encerra a função
*/

// Retorna um valor
// function soma(a, b) {
//     return a + b;
// }

// // Não retorna um valor, apenas exibe o resultado no console
// function soma2(a, b) {
//     console.log(a + b);
// }

function falaFrase(comeco) {
    function falaResto(resto) {
        return comeco + ' ' + resto;
    }
    return falaResto;
}

const fala = falaFrase('Olá');
const resto = fala('felipe');

///////////////////////////////////////////////

function criaMultiplicador(multiplicador) {
    function multiplicacao(n){
        return n * multiplicador;
    }
    return multiplicacao;
}

const duplica = criaMultiplicador(2);
const triplica = criaMultiplicador(3);
const quadriplica = criaMultiplicador(4);
console.log(duplica(4), triplica(4), quadriplica(4));