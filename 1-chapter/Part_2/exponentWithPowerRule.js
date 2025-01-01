function exponentWithPowerRule(a, n) {
    //Part1
    let opStake = [];
    while (n > 1) {
        if (n % 2 === 0) {
            opStake.push('square')
            n = Math.floor(n / 2)
        } else if (n % 2 === 1) {
            n -= 1;
            opStake.push('multiple')
        }
    }
    console.log(opStake)
    //Part2
    let result = a;
    while (opStake.length > 0) {
        let op = opStake.pop();

        if (op === 'multiple') {
            result = result * a
        } else if (op === 'square') {
            result = result * result
        }
    }

    return result
}

console.log(exponentWithPowerRule(3, 6))
console.log(exponentWithPowerRule(10, 3))
console.log(exponentWithPowerRule(17, 10))