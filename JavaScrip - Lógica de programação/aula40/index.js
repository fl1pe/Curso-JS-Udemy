// setInterval e setTimeout

function mostraHora(){
    let data = new Date();

    return data.toLocaleTimeString('pt-BR', {
        hour12: false
    })
}


/* O setInterval vai configurar um intervalo de tempo
para que alguma função seja executada em determinado momento.
setTimeout só executa uma vez.
*/

const time = setInterval(function(){
    console.log(mostraHora());
}, 1000);

setTimeout(function(){
    clearInterval(time);
}, 5000);
