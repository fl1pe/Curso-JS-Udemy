// Função fábrica (Factory functions)

function criaPesoa(nome, sobrenome, altura, peso) {
    return {
        nome,
        sobrenome,

        falar(assunto) {
            return `${this.nome} está falando sobre ${assunto}.`;
        },

        altura: altura,
        peso: peso,
        
        get imc() {
            const resultadoImc = this.peso / (this.altura ** 2);
            return resultadoImc.toFixed(2)
        }
    }
}

const p1 = criaPesoa('Felipe', 'Sousa', 1.8, 83);
const p2 = criaPesoa('Alana', 'Viana', 1.65, 69);

console.log(p1.falar('futebol'))
console.log(p2.falar('cinema'))

console.log(p2.imc())