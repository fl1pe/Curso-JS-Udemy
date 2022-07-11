// Métodos úteis para objetos

/* 
    Object.values => Retorna os valores das chaves
    Object.entries => Retorn um array com as chaves/valores 
    Object.assign(des, any) => Copia um objeto
    Object.getOwnPropertyDescriptor(o, 'prop') => Retorna as config
    ... (spread)

    Já vimos
    Object.keys (Retorna as chaves)
    Object.freez (Congela o objeto)
    Object.defineProperty (Define uma propriedades)
    Object.defineProperties (Define várias propriedades)
*/

const produto = {nome: 'Camisa', preco: 20};
const copia = {...produto, material: 'algodao'}; 
Object.defineProperty(produto, 'nome', {
    writable: false,
    configurable: false,
})
// console.log(Object.getOwnPropertyDescriptor(produto, 'nome'))
console.log(Object.entries(produto))