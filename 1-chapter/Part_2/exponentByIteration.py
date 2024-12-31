def exponentByIteration(base, exponent):
    result  = 1
    for i in range(exponent):
        result *= base
    return result

print(exponentByIteration(2, 2))
print(exponentByIteration(10, 3))
print(exponentByIteration(17, 10))