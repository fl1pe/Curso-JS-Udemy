// For - Clássico - Estrutura de repetição

// console.log('Linha 01');
// console.log('Linha 02');
// console.log('Linha 03');
// console.log('Linha 04');
// console.log('Linha 05');

/*
Estrutura do FOR (não precisar usar ";" no final)

for () {

}

for (let i = 20; i >= 0; i --) {
    console.log(`Linha ${i}`);

}

for (let i = 0; i <= 10; ++i) {
    const par = i % 2 === 0 ? 'PAR!' : 'ÍMPAR';
    console.log(i,par);
}

*/

const frutas = ['Banana', 'Maçã', 'Abacate', 'Uva', 'Morango', 'Pêra', 'Abacaxi', 'Mamão', 'Laranja', 'Kiwi'];

for (let i = 0; i < frutas.length; i++) {
    console.log(`Índice ${i}`,frutas[i])
}
