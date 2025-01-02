def exponentWithPower(base, exponent):
    opStack = []
    while exponent > 1:
        if exponent % 2 == 0:
            opStack.append('square')
            exponent = exponent // 2
        elif exponent % 2 == 1:
            exponent -= 1
            opStack.append('multiply')
    result = base
    while opStack:
        op = opStack.pop()

        if op == 'multiply':
            result *= base
        elif op == 'square':
            result *= result

    return result


print(exponentWithPower(3, 6))
print(exponentWithPower(10, 3))
print(exponentWithPower(17, 10))
