/*
Constanytes são espaços de memória que armazenam valores e são imutavéis.
E sempre que precisamos do conteúdo refereciamos a mesma.
não podemos criar uma constante sem inicializa-la

constantes podem ter qualquer nome, mas não podem começar com números, nem
ter espaços em branco e precisam ter nome significativo.
Ultilizamos camelCase para nomes com mais de uma palavra.
Variaveis são case sensitive.

NÃO ULTILIZAR VAR, ULTILIZAR const
*/

const nome = 'João';
const nome2 = 'Felipe '+ nome;
//nome = 'Maria'; // Erro! Constante não pode ser reatribuida.
console.log(nome, nome2);
const idade = 23;

// typeof é uma função que retorna o tipo da variavel
console.log(typeof nome);