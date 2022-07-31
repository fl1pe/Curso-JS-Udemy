// Herança com classes

class Dispositivos {
    constructor(nome) {
        this.nome = nome;
        this.ligado = false;
    }

    ligar(){
        if(this.ligado) {
            console.log(`${this.nome} já estar ligado`);
            return;
        }
        this.ligado = true;
    }

    desligar(){
        if(!this.ligado) {
            console.log(`${this.nome} já estar desligado`);
            return;
        }
        this.ligado = false;
    }
}

class Smartphone extends Dispositivos{
    constructor(nome, cor){
        super(nome); // Chama o construtor da classe pai/ Dispositivos
        this.cor = cor
    }
}

const s1 = new Smartphone('Iphone');
console.log(s1)