const nomes = ['Felipe', 'Luiz', 'Otávio'];

// for (let i = 0; i < nomes.length; i++){
//     console.log(i)
// }

// for ( let i in nomes){
//     console.log(i)
// }

// for (let i of nomes){
//     console.log(i)

// }

/* For clássico - Geralmente com iteráveis ( array ou strings)
For in - Retorna o índice ou chave ( string, array ou objetos)
For of - Retorna o valor em si ( iteráveis, arrays ou strings)
*/

const notebook  = {
    marca: 'Lenovo',
    memoria: 12,
    hd: '1-TeraByte'
    
};

for (let i in notebook){
    console.log(i, notebook[i])

}