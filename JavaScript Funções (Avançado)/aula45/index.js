/* Closures
https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Closures
*/


function retornaFuncao(nome){
    //const nome = 'Felipe';
    return function(){
        return nome;
    };
}

const testeFuncao = retornaFuncao('Felipe');
const testeFuncao2 = retornaFuncao('Alana');
console.dir(testeFuncao);
console.dir(testeFuncao2);