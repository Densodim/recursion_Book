import math

MULT_TABLE = {}

for i in range(10):
    for j in range(10):
        MULT_TABLE[(i, j)] = i * j


def padZeros(numberString, numZeroes, insertSide):
    if insertSide == 'left':
        return '0' * numZeroes + numberString
    elif insertSide == 'right':
        return numberString + '0' * numZeroes


def karatsuba(x, y):
    assert isinstance(x, int), 'x must be an integer'
    assert isinstance(y, int), 'y must be an integer'
    x = str(x)
    y = str(y)

    if len(x) == 1 and len(y) == 1:
        print('Lookup', x, '*', y, '=', MULT_TABLE[(int(x), int(y))])
        return MULT_TABLE[(int(x), int(y))]

    print('Multiplying', x, '*', y)

    if len(x) < len(y):
        x = padZeros(x, len(y) - len(x), 'left')
    elif len(y) < len(x):
        y = padZeros(y, len(x) - len(y), 'right')

    halfOfDigits = math.floor(len(x) / 2)

    a = int(x[:halfOfDigits])
    b = int(x[halfOfDigits:])
    c = int(y[:halfOfDigits])
    d = int(y[halfOfDigits:])

    step1Result = karatsuba(a, c)
    step2Result = karatsuba(b, d)
    step3Result = karatsuba(a + b, c + d)

    step4Result = step3Result - step2Result - step1Result

    step1Padding = (len(x) - halfOfDigits) + (len(x) - halfOfDigits)
    step1PaddedNum = int(padZeros(str(step1Result), step1Padding, 'right'))

    step4Padding = (len(x) - halfOfDigits)
    step4PaddedNum = int(padZeros(str(step4Result), step4Padding, 'right'))

    print('Solved', x, 'x', y, '=', step1PaddedNum + step2Result + step4PaddedNum)

    return step1PaddedNum + step2Result + step4PaddedNum


print('1357 * 2458 =', karatsuba(1357, 2458))
