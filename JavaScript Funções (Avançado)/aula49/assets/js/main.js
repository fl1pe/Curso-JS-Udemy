function criaCalculadora() {
    return {
        display: document.querySelector('.display'),
        //btnClear: document.querySelector('.btn-clear'),

        inicia() {
            this.cliqueBotoes();
            this.pressionaEnter();
        },

        pressionaEnter() {
            this.display.addEventListener('keyup', (e) => {
                if(e.keyCode === 13){
                    this.realizaConta();
                }
            })
        },

        realizaConta() {

            let resultado = this.display.value;
            // // const numeros = []
            // for (let i of resultado){
            //     numeros.push(Number(i))
            // }
            // console.log(numeros)

            try {
                resultado = eval(resultado);

                if (!resultado) {
                    alert('Conta Inválida!');
                }
                this.display.value = String(resultado);
            } catch (e) {
                alert('Conta Inválida!');
                return;
            }
        },

        clearDisplay() {
            this.display.value = '';
        },

        apagaUm() {
            this.display.value = this.display.value.slice(0, -1);
        },

        cliqueBotoes() {
            document.addEventListener('click', (e) => {
                const el = e.target;

                if (el.classList.contains('btn-num')) {
                    this.btnParaDisplay(el.innerText);
                }

                if (el.classList.contains('btn-clear')) {
                    this.clearDisplay();
                }

                if (el.classList.contains('btn-del')) {
                    this.apagaUm();
                }

                if (el.classList.contains('btn-eq')) {
                    this.realizaConta();
                }
            })
        },

        btnParaDisplay(valor) {
            this.display.value += valor;
        },
    };
}

const calculadora = criaCalculadora();
calculadora.inicia();