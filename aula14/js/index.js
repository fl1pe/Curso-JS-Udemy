let numero = Number(prompt("Digite um número: "));
let numeroTitulo = document.getElementById("numero-titulo");
let texto = document.getElementById("texto");
let raizQuadrada = Math.pow(numero);


numeroTitulo.innerHTML = numero;
texto.innerHTML = `<p>Raiz quadrada: <strong>${numero ** 0.5}<strong/> </p>`;
texto.innerHTML += `<p>${numero} é um inteiro? <strong>${Number.isInteger(numero)}</strong></p>`;
texto.innerHTML += `<p>É um NaN: <strong>${Number.isNaN(numero)}</strong></p>`;
texto.innerHTML += `<p>Arrendondado para cima: <strong>${Math.ceil(numero)}</strong></p>`;
texto.innerHTML += `<p>Arrendondado para baixo: <strong>${Math.floor(numero)}</strong></p>`;
texto.innerHTML += `<p>Com duas casas decimais: <strong>${numero.toFixed(2)}</strong></p>`;
