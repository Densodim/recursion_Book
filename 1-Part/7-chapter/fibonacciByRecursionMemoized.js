let fibonacciCache = {}

function fibonacci(number, indent=0) {
    let indentation = '.'.repeat(indent)

    console.log(`${indentation} fibonacci(${number}) called`);

    if (number in fibonacciCache){
        console.log(`Returning memoized result: ${fibonacciCache[number]}`)
        return fibonacciCache[number]
    }

    if (number === 1 || number === 2) {
        console.log(`Call to fibonacci(${number}) returning 1.`);
        fibonacciCache[number] = 1
        return 1;
    } else {
        console.log(`Calling fibonacci(${number - 1}) and fibonacci(${number - 2})`);
        let result = fibonacci(number - 1) + fibonacci(number - 2);
        console.log(`Call to fibonacci(${number}) returning ${result}`);
        fibonacciCache[number] = result
        return result;
    }
}

console.log(fibonacci(10));
console.log(fibonacci(40));
