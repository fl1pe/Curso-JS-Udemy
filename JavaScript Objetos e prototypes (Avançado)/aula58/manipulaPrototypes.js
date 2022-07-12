const objA = {
    chaveA: 'A'
};

const objB = {
    chaveB: 'B'
};

const objC = new Object();
objC.chaveC = 'C';
console.log(objC)
Object.setPrototypeOf(objB, objA)
Object.setPrototypeOf(objC, objB)