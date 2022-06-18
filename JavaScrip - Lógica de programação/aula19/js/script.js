function meuEscopo() {
    const formulario = document.querySelector(".form");
    const resultado = document.querySelector('.resultado');

    const pessoas = [];
    // formulario.onsubmit = function (evento) {
    //     evento.preventDefault();
    //     console.log('Não foi enviado!')
    // };
    function criaArray(nome, sobrenome, peso, altura){
        return {nome, sobrenome, peso, altura};
    }

    formulario.addEventListener('submit', function(evento){
        evento.preventDefault();

        const nome = formulario.querySelector('.nome');
        const sobrenome = formulario.querySelector('.sobrenome');
        const peso = formulario.querySelector('.peso');
        const altura = formulario.querySelector('.altura');

        pessoas.push(criaArray(nome.value, sobrenome.value, peso.value, altura.value))
        resultado.innerHTML += `<p>${nome.value} ${sobrenome.value} ` +
        `${peso.value} ${altura.value}</p>`;

        console.log(pessoas);
    });
}
meuEscopo();