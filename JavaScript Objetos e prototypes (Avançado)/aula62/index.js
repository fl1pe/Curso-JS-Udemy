// Factory Functions + Prototypes

function criaPessoa(nome, sobrenome) {
    const pessoaPrototype = {
        falar() {
            console.log(this.nome, "esta falando");
        },
        beber() {
            console.log(this.nome, "esta bebendo");
        },
        comer() {
            console.log(this.nome, "esta comendo");
        },
    };
    return Object.create(pessoaPrototype, {
        nome: { value: nome },
        sobrenome: { value: sobrenome },
    });
}
const pessoas = [
    { nome: "Felipe", sobrenome: "Sousa", idade: 22 },
    { nome: "Alana", sobrenome: "Viana", idade: 21 },
    { nome: "Luiz", sobrenome: "Soares", idade: 62 },
    { nome: "Eduardo", sobrenome: "Almeida", idade: 55 },
    { nome: "Letícia", sobrenome: "Ferreira", idade: 19 }
];

for (let i of pessoas) {
    const p = criaPessoa(i.nome, i.sobrenome);
    console.log(p)
    p.falar();
    p.beber();
    p.comer();
}
