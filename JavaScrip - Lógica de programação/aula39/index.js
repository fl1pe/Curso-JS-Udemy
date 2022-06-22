/* Tratando e lançando erros (try, catch, throw), também existe o bloco "finally" que sempre será executado.*/

// try{
//     console.log(naoExiste);
// } catch(error) {
//     console.log('Variavel nao existe');
// }

// function soma(x, y) {
//     if (typeof x !== 'number' || typeof y !== 'number') {
//         throw new ReferenceError('x e y precisao ser numeros');
//     }
//     return x + y;
// }

// try {
//     console.log(soma('45',2));
// } catch(error){
//     console.log('Deu um erro irmão');
// }

/* try {
    console.log("Olá, Mundo!", teste); // Será gerado um erro.
} catch (e){
    console.log('Erro foi tratado.');
} finally{
    console.log('FINALLY: Eu sempre sou executado.');
} */

function retornaHora(data) {
    if (data && !(data instanceof Date)) {
        throw new TypeError('Esperando instância de Date.');
    }

    if (!data) {
        data = new Date();
    }

    return data.toLocaleTimeString('pt-BR', {
        hour: '2-digit',
        minute: '2-digit',
        seconds: '2-digit',
        hour12: false
    });

}

try {
    const data = new Date('01-01-1970 12:58:12');
    const hora = retornaHora();
    console.log(hora);
} catch(e){
    // Tratar erro
} finally {
    console.log('Olá!');
}