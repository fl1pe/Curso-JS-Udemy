function Pessoa(nome, sobrenome, idade) {
  this.nome = nome;
  this.sobrenome = sobrenome;
  this.idade = idade;

  this.anoNascimento = () => {
    const dataAtual = new Date();
    return dataAtual.getFullYear() - this.idade;
  }

  this.nomeCompleto = () => {
    return `${this.nome} ${this.sobrenome}`;
  }
}

const p1 = new Pessoa("Felipe", "Sousa", 23);
const p2 = new Pessoa("Alana", "Viana", 22);
//console.log(p1.nomeCompleto());
//console.log(p2.nomeCompleto());
console.log(p2.anoNascimento());
console.log(p1.anoNascimento());
