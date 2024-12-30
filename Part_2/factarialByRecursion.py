from showcallstack import showcallstack


def factorial(number):
    if number == 1:
        return 1
    else:
        showcallstack()
        return number * factorial(number - 1)


print(factorial(5))
