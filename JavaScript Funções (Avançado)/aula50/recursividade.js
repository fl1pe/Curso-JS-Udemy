const recursiva = (max) => {
    console.log(max);

    let proximoNum = max - 1;
    if (proximoNum > 0) recursiva(proximoNum);

};
recursiva(10);