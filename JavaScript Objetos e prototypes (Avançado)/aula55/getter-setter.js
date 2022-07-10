function Produto(nome, preco, estoque) {
  this.nome = nome;
  this.preco = preco;

  let estoqueCopia = estoque;

  Object.defineProperty(this, "estoque", {
    enumerable: true,
    configurable: true,
    get: () => estoqueCopia,

    set: function (valor) {
      if (typeof valor !== "number") {
        console.log("valor errado");
        return;
      }
      estoqueCopia = valor;
    },
  });
}
const p1 = new Produto("Caneta", 20, 3);
console.log(p1);
p1.estoque = 30;
console.log(p1.estoque);
