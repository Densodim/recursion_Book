def sumPowerOf2(exponent):
    result = 0
    for i in range(1, exponent + 1):
        result += 2 ** i
    return result


print(sumPowerOf2(4))


def sumPowerOf2Resursion(exponent):
    if exponent == 1:
        return 1
    return 2 + sumPowerOf2Resursion(exponent - 1)


print(sumPowerOf2(4))
