function getPowerSet(chars, indent) {
    if (indent === undefined) {
        indent = 0
    }
    let debugMsg = ".".repeat(indent) + `In getPowerSet(${chars})`
    console.log(debugMsg + ", start.")

//     Base case
    if (chars === '') {
        console.log(debugMsg + `base case returns [" "]`)
        return ['']
    }

//     Recursion case
    let powerSet = []
    let head = chars[0]
    let tail = chars.slice(1, chars.length)

    console.log(`${debugMsg} part 1, get sets without head ${head}`)
    let tailPowerSet = getPowerSet(tail, indent + 1)

    console.log(`${debugMsg} part 2, get sets with head ${head}`)
    for (let tailSet of tailPowerSet) {
        console.log(`${debugMsg} New set ${head, tailSet}`)
        powerSet.push(head + tailSet)
    }
    powerSet = powerSet.concat(tailPowerSet)
    console.log(`${debugMsg} returning ${powerSet}`)
    return powerSet
}

console.log('The power set of ABC:')
console.log(getPowerSet('ABC'))