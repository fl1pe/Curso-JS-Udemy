const pessoa = {
    nome: 'Felipe',
    sobrenome: 'Bezerra'
}

// Visualizando os valores das chaves
/**
 * pessoa['nome'] -> Ela é mais verbosa, então por isso você vai tender sempre a utilizar a notação de ponto. Mas em alguns casos pode ser interessante você utilizar a notação de colchetes porque nesse caso
 * podemos colocar um valor dinâmico.
 * 
 * OBS: Object.freeze(obj) trava o objeto
*/
// const chave = 'nome';
// console.log(pessoa[chave]); // equivalente a pessoa.nome

const pessoa2 = new Object();
pessoa2.nome ='Felipe'
pessoa2.sobrenome ='Sousa'
console.log(pessoa2)