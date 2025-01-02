function ackermann(m, n, indentation) {
    if (indentation === undefined) {
        indentation = 0
    }
    console.log(' '.repeat(indentation) + `ackermann(${m}, ${n})`)

    if (m === 0) {
        return n + 1
    } else if ((m > 0) && (n === 0)) {
        return ackermann(m - 1, 1, indentation + 1)
    } else if ((m > 0) && (n > 0)) {
        return ackermann(m - 1, ackermann(m, n - 1, indentation + 1), indentation + 1)
    }
}

console.log('Starting with m=1 and n=1:')
console.log(ackermann(1, 1))
console.log('Starting with m=2 and n=3:')
console.log(ackermann(2, 3))