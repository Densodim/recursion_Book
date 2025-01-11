import functools

@functools.lru_cache()
def fibonacci(number):
    print('fibonacci(%s) called.' % (number))
    if number == 1 or number == 2:
        print('Call to fibonacci(%s) returning 1.' % (number))
        return 1
    else:
        print('Calling fibonacci(%s) and fibonacci(%s).' % (number - 1, number - 1))
        result = fibonacci(number - 1) + fibonacci(number - 2)
        print('Call to fibonacci(%s) returning %s.' % (number, result))
        return result
print(fibonacci(99))