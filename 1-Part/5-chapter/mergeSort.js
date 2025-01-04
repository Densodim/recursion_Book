function mergeSort(items) {
    console.log(`..... mergeSort() called on: ${items.join(', ')}`)

    if (items.length === 0 || items.length === 1) {
        return items
    }

    let iMidddle = Math.floor(items.length / 2)
    console.log(`............... Split into: ${items.slice(0, iMidddle).join(', ')} and ${items.slice(iMidddle).join(', ')}`)

    let left = mergeSort(items.slice(0, iMidddle))
    let right = mergeSort(items.slice(iMidddle))

    let sortedResult = []
    let iLeft = 0
    let iRight = 0

    while (sortedResult.length < items.length) {
        if (left[iLeft] < right[iRight]) {
            sortedResult.push(left[iLeft])
            iLeft++
        } else {
            sortedResult.push(right[iRight])
            iRight++
        }

        if (iLeft === left.length) {
            Array.prototype.push.apply(sortedResult, right.slice(iRight))
            break
        } else if (iRight === right.length) {
            Array.prototype.push.apply(sortedResult, left.slice(iLeft))
            break
        }
    }
    console.log(`The two halves merged into: ${sortedResult.join(', ')}`)
    return sortedResult
}

let myList = [0, 5, 9, 4, 8, 2, 7, 6, 1]
myList = mergeSort(myList)
console.log(myList)
