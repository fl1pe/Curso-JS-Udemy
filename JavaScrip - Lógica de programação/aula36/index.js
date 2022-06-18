/* While e Do While - Estrutura de repetição
*/

/* while (enquanto cond for verdadeira) {
    faça isso
}

do {
    faça isso
} while(enquanto isso for verdade);

No "do while" precisa de ponto e vírgula
*/

// const nomes = ['Felipe', 'Luiz', 'Pedro', 'Maria'];

function random(min, max) {
    const r = Math.random() * (max - min) + min;
    return Math.floor(r);
}
const min = 1;
const max = 50;

let rand = random(min, max);

// while (rand !== 10) {
//     rand = random(min, max)
//     console.log(rand);
// }

do {
    rand = random(min, max)
    console.log(rand);
} while(rand !== 10);

