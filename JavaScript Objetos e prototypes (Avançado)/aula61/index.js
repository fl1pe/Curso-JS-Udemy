// Polimorfismo

// Super clásse
function Conta(agen, conta, saldo) {
    this.agen = agen;
    this.conta = conta;
    this.saldo = saldo;
}

Conta.prototype.sacar = function (valor) {
    if (valor > this.saldo) {
        console.log(`Saldo insuficiente: ${this.saldo}`);
        return;
    }
    this.saldo -= valor;
    this.verSaldo();
};
Conta.prototype.depositar = function (valor) {
    this.saldo += valor;
    this.verSaldo();
};
Conta.prototype.verSaldo = function () {
    console.log(
        `Ag/c: ${this.agen}/${this.conta} | Saldo: ${this.saldo.toFixed(2)}`
    );
};

function CC(agen, conta, saldo, limite) {
    Conta.call(this, agen, conta, saldo);
    this.limite = limite;
}
CC.prototype = Object.create(Conta.prototype);
CC.prototype.constructor = CC;

CC.prototype.sacar = function (valor) {
    if (this.saldo + this.limite < valor) {
        console.log(`Saldo insuficiente: ${this.saldo}`);
        return;
    }
    this.saldo -= valor;
    this.verSaldo();
};

function CP(agen, conta, saldo, limite) {
    Conta.call(this, agen, conta, saldo);
    this.limite = limite;
}
CP.prototype = Object.create(Conta.prototype);
CP.prototype.constructor = CP;

const cc = new CC(11, 11, 0, 100);
cc.depositar(10);
cc.sacar(110);
cc.sacar(1);

console.log();

const cp = new CP(12, 33, 0);
cp.depositar(20);
cp.sacar(20);
cp.sacar(1);
