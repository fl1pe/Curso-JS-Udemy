/*
geradoras ela tem um trabalho específico elas são bem diferentes assim mais ou menos diferentes das funções normais porque elas têm um recurso especial que seria quase que pausar o código em determinado local.

Ex: Magina sim eu tenho uma função que eu preciso que ela me entregue não de uma vez. Três valores por exemplo, o valor1, e aí ela me entrega na primeira vez que eu chamar a função essa função me entrega valor 1, depois automaticamente na segunda vez que eu chamar essa função ela me entrega o valor 2 e depois na terceira vez automaticamente também ela me entrega esse valor 3 e aí acabou minha função ela não tem mais valor para me entregar.

Então seria quase que você tem um código que ele pode ser pausado, ela faz um negócio que se chama laser Evaluation aqui no caso que seria uma avaliação preguiçosa.
*/

function* geradora1() {
    let ola = 'Olá, Mundo!';
    yield ola;

    let ola2 = 'Hello, World!';
    yield ola2;

    let ola3 = 'Hola Mundo!';
    yield ola3;
}

const g1 = geradora1();

function* geradora2() {
    yield 0;
    yield 1;
    yield 2;
    yield 3;
}

function* geradora3() {
    yield* geradora2();
    yield 4;
    yield 5;
    yield 6;
}

function* geradora4() {
    yield function () {
        console.log('yild 1');
    }
    yield function () {
        console.log('yild 2');
    }
}

const g4 = geradora4();
const func1 = g4.next().value;
const func2 = g4.next().value;
func2();