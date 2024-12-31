function fibonacci(number) {
    let a = 1, b = 1;
    let nextNum;
    console.log('a =', a, 'b=', b)
    for (let i = 1; i < number; i++) {
        nextNum = a + b;
        a = b;
        b = nextNum;
        console.log('a =', a, 'b=', b)
    }
}

fibonacci(10)