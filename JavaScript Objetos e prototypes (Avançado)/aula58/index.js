function Produto(nome, preco) {
  this.nome = nome;
  this.preco = preco;
}

Produto.prototype.desconto = function (desconto) {
  this.preco = this.preco - this.preco * (desconto / 100);
};

Produto.prototype.aumento = function (desconto) {
  this.preco = this.preco + this.preco * (desconto / 100);
};
const p1 = new Produto("Camisa", 50);

const p2 = {
  nome: "Caneca",
  preco: 50,
};
Object.setPrototypeOf(p2, Produto.prototype);
p2.aumento(10);

// Cria um obj e já seta o seu Prototype
const p3 = Object.create(Produto.prototype, {
    preco: {
    writable: true,
    configurable: true,
    value: 78
  },
  tamanho: {
    writable: true,
    configurable: true,
    value: 'M'
  },
});
p3.aumento(12)
console.log(p3)
