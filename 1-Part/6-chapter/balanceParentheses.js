function getBalancedParens(pairs, openRem, closeRem, current, indent) {
    if (openRem === undefined) {
        openRem = pairs
    }
    if (closeRem === undefined) {
        closeRem = pairs
    }
    if (current === undefined) {
        current = ''
    }
    if (indent === undefined) {
        indent = 0
    }
    console.log(`${'.'.repeat(indent)} Start of pairs=${pairs}, openRem=${openRem}, closeRem=${closeRem}, current=${current}`)

    // Base case
    if (openRem === 0 && closeRem === 0) {
        console.log(`${'.'.repeat(indent)} 1-st base case. Returning ${[current]}`)
        return [current]
    }
//     Recursion case
    let results = []
    if (openRem > 0) {
        console.log(`${'.'.repeat(indent)} Adding open parenthesis`)
        Array.prototype.push.apply(results, getBalancedParens(pairs, openRem - 1, closeRem, current + '(', indent + 1))
    }
    if (closeRem > openRem) {
        console.log(`${'.'.repeat(indent)} Adding close parenthesis`)
        results = results.concat(getBalancedParens(pairs, openRem, closeRem - 1, current + ')', indent + 1))
    }
//     Base case
    console.log(`${'.'.repeat(indent)} 2nd base case. Returning ${results}`)
    return results
}

console.log('All combinations of 2 balanced parentheses:')
console.log('Results:', getBalancedParens(2))