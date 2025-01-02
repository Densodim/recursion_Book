function sum(number) {
    if (number.length === 0) {
        return 0;
    } else {
        let head = number[0];
        let tail = number.slice(1, number.length);
        return head + sum(tail)
    }
}

let nums = [1, 2, 3, 4, 5]
console.log(`The sum of ${nums} is ${sum(nums)}`)
nums = [5, 2, 6, 8]
console.log(`The sum of ${nums} is ${sum(nums)}`)
nums = [1, 10, 100, 1000]
console.log(`The sum of ${nums} is ${sum(nums)}`)