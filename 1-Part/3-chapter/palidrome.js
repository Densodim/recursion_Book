function palidrome(theString) {
    if (theString.length === 0 || theString.length === 1){
        return true
    } else {
        let head = theString[0]
        let middle = theString.substring(1, theString.length - 1)
        let last = theString[theString.length - 1]
        return head === last && palidrome(middle)
    }
}

let text = 'racecar'
console.log(`${text} is palidrome: ${palidrome(text)}`)
text = 'tacocat'
console.log(`${text} is palidrome: ${palidrome(text)}`)
text = 'xophie'
console.log(`${text} is palidrome: ${palidrome(text)}`)