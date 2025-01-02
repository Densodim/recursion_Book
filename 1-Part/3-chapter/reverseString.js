function rev(theString) {
    if (theString.length === 0 || theString.length === 1) {
        return theString
    } else {
        let head = theString[0]
        let tail = theString.substring(1, theString.length)
        return rev(tail) + head
    }
}

console.log(rev('abcdefghijklmnop'))
console.log(rev('Hello world'))