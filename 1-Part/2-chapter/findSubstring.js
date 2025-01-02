function findSunstringInteractive(neddle, haystack) {
    let i = 0
    while (i < haystack.length){
        if (haystack.substring(i, i+neddle.length) == neddle){
            return i;
        }
        i = i +1
    }
    return -1
}

function findSubstringRecursive(neddle, haystack, i){
    if (i === undefined){
        i = 0
    }
    if (i >= haystack.length){
        return -1
    }

    if(haystack.substring(i, i + neddle.length) == neddle){
        return i
    }else {
        return findSubstringRecursive(neddle, haystack, i +1)
    }
}

console.log(findSubstringRecursive('cat', 'My cat Zophie'))
console.log(findSunstringInteractive('cat', 'My cat Zophie'))