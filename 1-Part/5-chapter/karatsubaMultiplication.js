let MULT_TABLE = {}
for (let i = 0; i < 10; i++) {
    for (let j = 0; j < 10; j++) {
        MULT_TABLE[[i, j]] = i * j
    }
}

// console.log(MULT_TABLE)

function padZeros(numberString, numZeros, insertSide) {
    if (insertSide === 'left') {
        return '0'.repeat(numZeros) + numberString
    } else if (insertSide === 'right') {
        return numberString + '0'.repeat(numZeros)
    }
}

function karatsuba(x, y) {
    console.assert(Number.isInteger(x), 'x must be an integer')
    console.assert(Number.isInteger(y), 'y must be an integer')
    x = x.toString()
    y = y.toString()

    if ((x.length === 1) && (y.length === 1)) {
        console.log(`Lookup ${x.toString()} * ${y.toString()} = ${MULT_TABLE[[parseInt(x), parseInt(y)]]}`)
        return MULT_TABLE[[parseInt(x), parseInt(y)]]
    }

    console.log(`Multiplying ${x.toString()} * ${y.toString()}`)

    if (x.length < y.length) {
        x = padZeros(x, y.length - x.length, 'left')
    } else if (y.length < x.length) {
        y = padZeros(y, x.length - y.length, 'left')
    }

    let halfOfDigits = Math.floor(x.length / 2)

    let a = parseInt(x.substring(0, halfOfDigits))
    let b = parseInt(x.substring(halfOfDigits))
    let c = parseInt(y.substring(0, halfOfDigits))
    let d = parseInt(y.substring(halfOfDigits))

    let step1Result = karatsuba(a, c)
    let step2Result = karatsuba(b, d)
    let step3Result = karatsuba(a + b, c + d)

    let step4Result = step3Result - step2Result - step1Result

    let step1Padding = (x.length - halfOfDigits) + (x.length - halfOfDigits)
    let step1PaddedNum = parseInt(padZeros(step1Result.toString(), step1Padding, 'right'))

    let step4Padding = (x.length - halfOfDigits)
    let step4PaddedNum = parseInt(padZeros((step4Result).toString(), step4Padding, 'right'))

    console.log(`Solved ${x} x ${y} = ${(step1PaddedNum + step2Result + step4PaddedNum).toString()}`)

    return step1PaddedNum + step2Result + step4PaddedNum
}

console.log('1357 * 2458 =', karatsuba(1357, 2458))