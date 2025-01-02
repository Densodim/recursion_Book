def multiplication(number):
    if len(number) == 0:
        return 1
    elif len(number) == 1:
        return number[0]
    else:
        head = number[0]
        tail = number[1:]
        return head * multiplication(tail)


num = [1, 2, 3, 4]
print(multiplication(num))
