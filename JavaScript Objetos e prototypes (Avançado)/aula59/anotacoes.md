# Herança?<br>

O termo <strong>"Herança"</strong> é muito usado para descrever que as características de um objeto são passadas para outro objeto. Assim como uma filha ou filho pode herdar características da sua mãe ou pai (geneticamente). Por isso estamos usando esse termo para descrever o comportamento desejado. Além disso, a maioria das literaturas, incluindo as documentações como o [MDN](https://developer.mozilla.org/pt-BR/docs/Learn/JavaScript/Objects/Classes_in_JavaScript) * citam a palavra herança.

Vamos continuar usando o termo <strong>"Herança"</strong> até o final do curso, porém, Javascript não é uma linguagem que apresenta essa característica em específico, portanto não existe "herança" aqui. O que ocorre, na verdade, é "delegação". Esse seria o termo mais correto para descrever "Herança" em JS.

Quando fazemos algo como:
```
function Produto(nome, preco) {
  this.nome = nome;
  this.preco = preco;
}
 
Produto.prototype.aumento = function (quantia) {
  this.preco += quantia;
};
 
function Camiseta(nome, preco, cor) {
  Produto.call(this, nome, preco);
  this.cor = cor;
}
Camiseta.prototype = Object.create(Produto.prototype);
Camiseta.prototype.constructor = Camiseta;
```
Mais especificamente no trecho:<br>
<pre>Camiseta.prototype = Object.create(Produto.prototype);</pre>

Estamos, claramente, falando que o <strong>Camiseta.prototype</strong> é um novo objeto vazio que tem como protótipo <strong>Produto.prototype.</strong> Dessa forma, estamos adicionando <strong>Camiseta.prototype</strong> na cadeia de protótipos de <strong>Produto.</strong> Por consequência, tudo o que não existir em <strong>Camiseta</strong> nem em <strong>Camiseta.prototype</strong> será delegado para <strong>Produto.prototype</strong> (e assim por diante até chegar no topo da cadeia de protótipos). Por isso vejo o termo delegação como mais adequado para este comportamento.

Novamente, vamos continuar usando o termo <strong>"Herança"</strong>, mas achei que seria interessante que você soubesse disso neste momento.