const resultado = document.querySelector('.resultado');
const data = new Date();

function diaFormatado(dia) {
    switch (dia) {
        case 0:
            return 'Domingo';
        case 1:
            return 'Segunda-Feira';
        case 2:
            return 'Terça-Feira';
        case 3:
            return 'Quarta-Feira';
        case 4:
            return 'Quinta-Feira';
        case 5:
            return 'Sexta-Feira';
        case 6:
            return 'Sábado';
        default:
            return '';
    }
}

function numeroDia(dia) {
    return dia >= 10 ? dia : `0${dia}`;
}

function numeroMes(mes) {
    const meses = ['Janeiro', 'Fevereiro', 'Março', 'Abril', 'Maio', 'Junho', 'Julho', 'Agosto', 'Setembro', 'Outubro', 'Novembro', 'Dezembro'];

    switch (mes) {
        case 0:
            return meses[0];
        case 1:
            return meses[1];
        case 2:
            return meses[2];
        case 3:
            return meses[3];
        case 4:
            return meses[4];
        case 5:
            return meses[5];
        case 6:
            return meses[6];
        case 7:
            return meses[7];
        case 8:
            return meses[8];
        case 9:
            return meses[9];
        case 10:
            return meses[10];
        case 11:
            return meses[11];
        default:
            return '';
    }
}

function horaFormatada (data){
    const hora = `${data.getHours()}:${data.getMinutes()}:${numeroDia(data.getSeconds())}`;
    return hora;
}

const diaSemana = diaFormatado(data.getDay());
const diaMes = numeroDia(data.getDate())
const mes = numeroMes(data.getMonth());
const hora = horaFormatada(data);

resultado.innerHTML = `${diaSemana}, ${diaMes} de ${mes} de ${data.getFullYear()}</b> ${hora}`;