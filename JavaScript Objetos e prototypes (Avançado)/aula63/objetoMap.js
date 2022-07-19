// https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/Map

const pessoas = [
    {id: 3, nome: 'Felipe'},
    {id: 2, nome: 'Maria'},
    {id: 1, nome: 'Helena'},
];

const novasPessoas = new Map();

for(let pessoa of pessoas){
    const { id } = pessoa;
    novasPessoas.set(id, {...pessoa}); // seta um novo valor
}
/* console.log(novasPessoas);
console.log(novasPessoas.get(2)); // obter um valor específico */
for (let [identifier, {id, nome}] of novasPessoas){
    console.log(identifier, id, nome)
}
