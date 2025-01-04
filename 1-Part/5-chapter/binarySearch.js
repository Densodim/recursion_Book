function binarySearch(needle, haystack, left, right) {
    if (left === undefined) {
        left = 0
    }
    if (right === undefined) {
        right = haystack.length - 1
    }

    console.log(`Searching: ${haystack.slice(left, right + 1).join(', ')} \n`)

    if (left > right) {
        return null
    }

    let mid = Math.floor((left + right) / 2)
    if (needle === haystack[mid]) {
        return mid
    } else if (needle < haystack[mid]) {
        return binarySearch(needle, haystack, left, mid - 1)
    } else if (needle > haystack[mid]) {
        return binarySearch(needle, haystack, mid + 1, right)
    }
}

console.log(binarySearch(13, [1, 2, 3, 8, 10, 13, 16, 20, 36]))