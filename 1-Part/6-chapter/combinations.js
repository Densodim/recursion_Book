function getCombos(chars, k, indent) {
    if (indent === undefined) {
        indent = 0
    }
    let debugMsg = ".".repeat(indent) + `In getCombos(${chars}, ${k})`
    console.log(debugMsg, ', start.')

    if (k === 0) {
        console.log(`${debugMsg} base case returns ['']`)
        return ['']
    } else if (chars === '') {
        console.log(`${debugMsg} base case returns []`)
        return []
    }

    let combinations = []
    let head = chars.slice(0, 1)
    let tail = chars.slice(1, chars.length)
    console.log(`${debugMsg} part 1, get combos with head ${head}`)
    let tailCombos = getCombos(tail, k - 1, indent + 1)
    console.log(`${".".repeat(indent)} Adding head ${head} to tail combos:`)
    for (let tailCombo of tailCombos) {
        console.log(`${".".repeat(indent)} New combination ${head} ${tailCombo}`)
        combinations.push(head + tailCombo)
    }

    console.log(`${debugMsg} part-2, get combos without head ${head}`)
    combinations = combinations.concat(getCombos(tail, k, indent + 1))

    console.log(`${debugMsg} results are ${combinations}`)
    return combinations
}

console.log('2-combinations of "ABC":')
console.log('Results:', getCombos('ABC', 2))