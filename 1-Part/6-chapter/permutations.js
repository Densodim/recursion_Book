function getPerms(chars, indent) {
    if (indent === undefined) {
        indent = 0
    }
    console.log(`${'.'.repeat(indent)} Start of getPerms(${chars})`)

    if (chars.length === 0) {
        console.log(`${'.'.repeat(indent)} When chars = ${chars} base case returns ${chars}`)
        return [chars]
    }

    let permutations = []
    let head = chars[0]
    let tail = chars.slice(1)
    let tailPermutations = getPerms(tail, indent + 1)
    for (let tailPerm of tailPermutations) {
        console.log(`${'.'.repeat(indent)} When chars = ${chars} putting head ${head} in all places in ${tailPerm}`)
        for (let i = 0; i <= tailPerm.length; i++) {
            let newPerm = [...tailPerm.slice(0, i), head, ...tailPerm.slice(i)]
            console.log(`${'.'.repeat(indent)} New permutations: ${newPerm}`)
            permutations.push(newPerm)
        }
    }
    console.log(`${'.'.repeat(indent)} When chars = ${chars} results are ${permutations}`)
    return permutations
}

console.log('Permutations of "ABCD:')
console.log('Results:', getPerms([1, 2 ,3]))