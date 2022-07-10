/**
 * Object.defineProperty() e Object.defineProperties()
 */
function Produto(nome, preco, estoque){
    this.nome = nome,
    this.preco = preco,
    // this.estoque = estoque

    Object.defineProperty(this, 'estoque',{
        enumerable: false, // mostra a chave
        value: estoque, // valor
        writable: false, // não permite alteração no valor
        configurable: false // não permite deletar ou configurar
    })
};
const p1 = new Produto('Notebook', 2999, 10);
p1.estoque = 20;
for (let i in p1){
    console.log(i);
}