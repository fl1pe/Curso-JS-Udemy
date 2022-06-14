/*
Objeto Date

const hora = 60 * 60 * 4 * 1000;
const dia  = 60 * 60 * 24 * 1000;
const data = new Date(0 + hora + dia);
console.log(data.toString());
*/
const data = new Date('2019-10-06 20:30:40');
console.log(data.toString());
console.log('Dia', data.getDate());
console.log('Mês', data.getMonth() + 1); // Mês começa do zero
console.log('Ano', data.getFullYear());
console.log('Hora', data.getHours());
console.log('Minutos', data.getMinutes());
console.log('Segundos', data.getSeconds());
console.log('Milissegundos', data.getMilliseconds());
console.log('Dia da semana', data.getDay()); // 0 - Domingo, 
