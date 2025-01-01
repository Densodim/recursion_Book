def sum(number):
    if len(number) == 0:
        return 0
    else:
        head = number[0]
        tail = number[1:]
        return head + sum(tail)


nums = [1, 2, 3, 4, 5]
print('The sum of', nums, 'is', sum(nums))
nums = [5, 2, 6, 8]
print('The sum of', nums, 'is', sum(nums))
nums = [1, 10, 100, 1000]
print('The sum of', nums, 'is', sum(nums))
