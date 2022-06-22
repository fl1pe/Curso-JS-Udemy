function criaHora(seg){
    const data = new Date(seg * 1000);
    return data.toLocaleTimeString('pt-Br',{
        hour12: false,
        timeZone: 'UTC'
    })
}


const relogio = document.querySelector('.relogio');
const iniciar = document.querySelector('.iniciar');
const pausar = document.querySelector('.pausar');
const zerar = document.querySelector('.zerar');
let segundos = 0;
let timer;

function iniciaRelogio(){
    timer = setInterval(function(){
        segundos++;
        relogio.innerHTML = criaHora(segundos)
    }, 1000);
}

iniciar.addEventListener('click', function(event){
    clearInterval(timer);
    iniciaRelogio();
    relogio.classList.remove('pausado');
});

pausar.addEventListener('click', function(event){
    clearInterval(timer);
    relogio.classList.add('pausado');
});
zerar.addEventListener('click', function(event){
    clearInterval(timer);
    relogio.innerHTML = '00:00:00';
    segundos = 0;
});