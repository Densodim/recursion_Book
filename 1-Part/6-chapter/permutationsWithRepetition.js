function getPermsWithRep(chars, permLenght, prefix) {
    if (permLenght === undefined) {
        permLenght = chars.length
    }
    if (prefix === undefined) {
        prefix = ''
    }
    let indent = '.'.repeat(prefix.length)
    console.log(`${indent} Start args= (${chars, permLenght, prefix})`)

    if (permLenght === 0) {
        console.log(`${indent} Base case reached, returning ${[prefix]}`)
        return [prefix]
    }

    let results = []
    console.log(`${indent} Adding each char to prefix ${prefix}`)
    for (let char of chars) {
        let newPrefix = prefix + char
        results = results.concat(getPermsWithRep(chars, permLenght - 1, newPrefix))
    }
    console.log(`${indent} Returning ${results}`)
    return results
}

console.log('All permutations with repetition of JPB128:')
console.log(getPermsWithRep('ABC', 1, 'A'))