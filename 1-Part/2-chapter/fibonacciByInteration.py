def fibonacci(number):
    a, b = 1, 1
    print('a = %s, b = %s' % (a, b))
    for i in range(1, number):
        a, b = b, a + b
        print('a = %s, b = %s' % (a, b))
    return a


print(fibonacci(10))
