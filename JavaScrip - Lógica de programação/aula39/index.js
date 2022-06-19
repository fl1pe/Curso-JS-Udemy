/* Tratando e lançando erros (try, catch, throw)*/

// try{
//     console.log(naoExiste);
// } catch(error) {
//     console.log('Variavel nao existe');
// }

function soma(x, y) {
    if (typeof x !== 'number' || typeof y !== 'number') {
        throw new ReferenceError('x e y precisao ser numeros');
    }
    return x + y;
}

try {
    console.log(soma('45',2));
} catch(error){
    console.log('Deu um erro irmão');
}
