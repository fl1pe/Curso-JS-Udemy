// Objetos 

const pessoa = {
    nome: 'Felipe',
    sobrenome: 'Sousa',
    idade: 22,
    // Criando uma método dentro do objeto
    fala (){
        console.log(`Olá me chamo ${this.nome} e tenho ${this.idade} anos`);
        // Para referenciar um atributo do objeto usa-se a palavra "this"
    }
};
pessoa.fala()
// console.log(pessoa.nome)

// pessoa1.nome = 'joao'
// console.log(pessoa1.nome)

// Função pra criar um objeto
function criaPessoa (nome, sobrenome, idade){
    return { nome, sobrenome, idade}
    // return {
    //     nome: nome,
    //     sobrenome: sobrenome,
    //     idade: idade
    // };
}

const pessoa1 = criaPessoa('Felipe','Sousa', 22);
const pessoa2 = criaPessoa('Pedro','Vieira', 30);
const pessoa3 = criaPessoa('Maria','Oliveira', 24);
console.log(pessoa1.nome, pessoa2.nome)