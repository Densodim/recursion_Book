function sumDivConq(numbers) {
    if (numbers.length === 0) {
        return 0
    } else if (numbers.length === 1) {
        return numbers[0]
    } else {
        let mid = Math.floor(numbers.length / 2)
        let leftHalfSum = sumDivConq(numbers.slice(0, mid))
        let rightHalfSum = sumDivConq(numbers.slice(mid, numbers.length + 1))
        return leftHalfSum + rightHalfSum
    }
}

let nums = [1, 2, 3, 4, 5]
console.log(`The sum of ${nums} is ${sumDivConq(nums)}`)