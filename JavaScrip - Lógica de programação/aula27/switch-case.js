// Switch Case
const data = new Date('1999-10-11 07:00:00');
const diaSemana = data.getDay();
let diaTexto;

// Ao usar switch assim que o valor for encontrado usa-se break para parar o bloco
switch (diaSemana) {
    case 0:
        diaTexto = 'Domingo';
        break;
    case 1:
        diaTexto = 'Segunda';
        break;
    case 2:
        diaTexto = 'Terça';
        break;
    case 3:
        diaTexto = 'Quarta';
        break;
    case 4:
        diaTexto = 'Quinta';
        break;
    case 5:
        diaTexto = 'Sexta';
        break;
    case 6:
        diaTexto = 'Sábado';
        break;
    default: // seta um valor padrão
        diaTexto = '';
}

// if (diaSemana === 0){
//     diaTexto = 'Domingo';
// } else if (diaSemana === 1){
//     diaTexto = 'Segunda';
// }else if (diaSemana === 2){
//     diaTexto = 'Terça';
// }else if (diaSemana === 3){
//     diaTexto = 'Quarta';
// }else if (diaSemana === 4){
//     diaTexto = 'Quinta';
// }else if (diaSemana === 5){
//     diaTexto = 'Sexta';
// }else if (diaSemana === 6){
//     diaTexto = 'Sábado';
// }

console.log(diaSemana, diaTexto);
