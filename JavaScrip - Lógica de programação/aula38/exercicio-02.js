/* Escrever uma função chamada "ePaisagem" que
recebe dois argumentos, largura e altura de uma imagem (number).
Retorne true se a imagem estiver no modo paisagem.
*/

const ePaisagem = (largura, altura) => largura > altura; // ? true : false;

const largura = 1920;
const altura = 1080;

const testeFuncao = ePaisagem(largura, altura);
console.log(testeFuncao);
