function quicksort(items, left, right) {
    if (left === undefined) {
        left = 0
    }
    if (right === undefined) {
        right = items.length - 1
    }

    console.log(`quicksort() called on this range: ${items.slice(left, right + 1).join(', ')}`)
    console.log(`........... The full list is: ${items.join(', ')}`)

    if (right <= left) {
        return
    }

    let i = left
    let pivotValue = items[right]
    console.log(`....... The pivot is: ${pivotValue.toString()}`)

    for (let j = left; j < right; j++) {
        if (items[j] <= pivotValue) {
            [items[i], items[j]] = [items[j], items[i]]
            i++
        }
    }
    [items[i], items[right]] = [items[right], items[i]]
    console.log(`........ After swapping, the range is: ${items.slice(left, right + 1).join(', ')}`)
    console.log(`Recursively calling quicksort on: ${items.slice(left, i).join(', ')} and ${items.slice(i + 1, right + 1).join(', ')}`)

    quicksort(items, left, i -1)
    quicksort(items, i+1, right)
}

let myList = [0, 5, 9, 4, 8, 2, 7, 6, 1]
quicksort(myList)
console.log(myList.join(', '))