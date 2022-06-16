/*
Atribuição via desestruturação (Objeto)
*/

const pessoa = {
    nome: 'Felipe',
    sobrenome: 'Sousa',
    idade: 22,
    endereco: {
        rua: 'Av Brasil',
        numero: 106
    }
};
/* Extrai o valor da chave "nome" e CRIA uma variável com o nome da chave
podemos setar uma valor padrão caso a chave não exista.

const {nome = ''} = pessoa;
console.log(nome);
*/

/*Extrai o valor da chave "nome" e DEFINIMOS um nome pra variável, podemos setar uma valor padrão caso a chave não exista.

console.log(nomePessoa);
const { nome: nomePessoa, idade } = pessoa;
*/

/*
Extraindo valores de dentro de um objeto que está dentro de outro
objeto.

const {endereco: {rua, numero} } = pessoa;

Para extrair o objeto completo basta informá-lo da atribuição.
EX:
const {endereco} = pessoa; //Imprime o objeto completo
*/
const {nome: nomePessoa, ...resto} = pessoa;
console.log(resto);
