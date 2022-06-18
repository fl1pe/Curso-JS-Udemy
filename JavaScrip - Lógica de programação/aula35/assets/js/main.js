// Exercício com NodeList (Browser)

const paragrafos = document.querySelector('.paragrafos');
const listaP = paragrafos.querySelectorAll('p');

// Pega os estilos CSS do body computados pelo navegador
const estilosBody = getComputedStyle(document.body);
const backgrounBody = estilosBody.backgroundColor;

for (let i of listaP) {
    i.style.backgroundColor = backgrounBody;
    i.style.color = '#FFF';
}