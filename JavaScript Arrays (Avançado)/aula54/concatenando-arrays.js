const array1 = [1, 2, 3];
const array2 = [4, 5, 6];

// const array3 = array1.concat(array2);
const array3 = [...array1, 'Felipe', ...[20,10], ...array2]; // ...spread
console.log(array3)
