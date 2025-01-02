function multiplication(number) {
    if (number.length === 0) {
        return 1
    } else if (number.length === 1) {
        return number[0]
    } else {
        let head = number[0]
        let tail = number.slice(1)
        return head * multiplication(tail)
    }
}

num = [1, 2, 3, 4]
console.log(multiplication(num))