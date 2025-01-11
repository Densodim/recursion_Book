fibonacciCache = {}

def fibonacci(number, indent=0):
    global fibonacciCache
    indentation = '.' * indent

    print(indentation + 'fibonacci(%s) called.' % (number))

    if number in fibonacciCache:
        print(indentation + 'Returning memoized result: %s' % (fibonacciCache[number]))
        return fibonacciCache[number]

    if number == 1 or number == 2:
        print('Call to fibonacci(%s) returning 1.' % (number))
        fibonacciCache[number] = 1
        return 1
    else:
        print('Calling fibonacci(%s) and fibonacci(%s).' % (number - 1, number - 1))
        result = fibonacci(number - 1) + fibonacci(number - 2)
        print('Call to fibonacci(%s) returning %s.' % (number, result))
        fibonacciCache[number] = result
        return result


print(fibonacci(10))
print(fibonacci(10))
