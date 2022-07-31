// Usando classes ( Validando CPF)

const cpfTeste = "705.484.450-52";

class ValidaCpf {
    constructor(cpf) {
        Object.defineProperty(this, "cpfLimpo", {
            enumerable: true,
            value: cpf.replace(/\D+/g, ""),
        });
    }

    sequencia() {
        return this.cpfLimpo[0].repeat(11) === this.cpfLimpo;
    }

    geraNovoCpf() {
        const cpfSemDigitos = this.cpfLimpo.slice(0, -2);
        const digito1 = this.geraDigito(cpfSemDigitos);
        const digito2 = this.geraDigito(cpfSemDigitos + digito1);
        this.novoCpf = cpfSemDigitos + digito1 + digito2;
    }

    geraDigito(cpfSemDigitos) {
        let total = 0;
        let reverso = cpfSemDigitos.length + 1;

        for (let i of cpfSemDigitos) {
            total += reverso * Number(i);
            reverso--;
        }
        const digito = 11 - (total % 11);
        return digito <= 9 ? String(digito) : "0";
    }

    valida() {
        if (typeof this.cpfLimpo === "undefined") return false;
        if (this.cpfLimpo.length != 11) return false;
        if (this.sequencia()) return false;
        this.geraNovoCpf();

        return this.novoCpf === this.cpfLimpo;
    }
}

const testeFuncao = new ValidaCpf(cpfTeste);
console.log(testeFuncao.valida());
