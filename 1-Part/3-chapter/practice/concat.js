function concat(array) {
    if (array.length === 0) {
        return ''
    } else if (array.length === 1) {
        return array[0]
    } else {
        let head = array[0]
        let tail = array.slice(1)
        return head + concat(tail)
    }
}

console.log(concat(['Hello', 'world']))