// Exercício com for

const elementos = [
    { tag: 'p', texto: 'Frase 1' },
    { tag: 'div', texto: 'Frase 2' },
    { tag: 'footer', texto: 'Frase 3' },
    { tag: 'section', texto: 'Frase 4' },
];

const container = document.querySelector('.container');
const div = document.createElement('div');
//div.classList.add('nova-div');
container.appendChild(div);
const resultado = container.querySelector('div');

for (let i = 0; i < elementos.length; i++) {
    const elemento = elementos[i];
    const {tag: getTag, texto: getTexto} = elemento;
    const tag = document.createElement(getTag);
    const texto = getTexto;
    tag.innerText += texto;
    div.appendChild(tag);
}
