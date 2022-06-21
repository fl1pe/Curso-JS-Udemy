class Pessoa {
	constructor(nome, idade) {
		this.nome = nome;
		this.idade = idade;

		andar(); {
			console.log(`${this.nome} andou.`);
		}
	}
}

const pessoa01 = new Pessoa('João', 20);
const pessoa02 = new Pessoa('Maria', 25);
const pessoa03 = new Pessoa('Bruno', 15);

pessoa01.andar;
pessoa02.andar;
pessoa03.andar;