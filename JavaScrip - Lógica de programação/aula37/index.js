// Break, Continue
// Continue continua para próxima iteração e break encerra o laço

const numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9];

for (let i of numeros) {

    if (i === 4){
        console.log(`numero ${i} pulado`);
        continue;
    }
    console.log(i);

}