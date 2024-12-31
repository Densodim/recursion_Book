function fibonacci(number) {
    console.log(`fibonacci(${number}) called`);
    if (number === 1 || number === 2) {
        console.log(`Call to fibonacci(${number}) returning 1.`);
        return 1;
    } else {
        console.log(`Calling fibonacci(${number - 1}) and fibonacci(${number - 2})`);
        let result = fibonacci(number - 1) + fibonacci(number - 2);
        console.log(`Call to fibonacci(${number}) returning ${result}`);
        return result;
    }
}

console.log(fibonacci(10));
