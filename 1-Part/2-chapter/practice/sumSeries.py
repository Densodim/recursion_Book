def sumSeriesIteration(exponent):
    result = 0
    for i in range(1, exponent + 1):
        result += i
    return result


print(sumSeriesIteration(6))

def sumSeriesResursion(exponent):
    if exponent == 1:
        return 1
    return exponent + sumSeriesResursion(exponent - 1)

print(sumSeriesResursion(6))