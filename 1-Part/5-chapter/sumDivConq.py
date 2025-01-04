def sumDivConq(numbers):
    if len(numbers) == 0:
        return 0
    if len(numbers) == 1:
        return numbers[0]
    else:
        mid = len(numbers) // 2
        leftHalfSum = sumDivConq(numbers[0:mid])
        rightHalfSum = sumDivConq(numbers[mid:len(numbers) + 1])
        return leftHalfSum + rightHalfSum


nums = [1, 2, 3, 4, 5]
print('The sum of', nums, 'is', sumDivConq(nums))
nums = [5, 8, 9, 4]
print('The sum of', nums, 'is', sumDivConq(nums))
nums = [1, 10, 100, 1000]
print('The sum of', nums, 'is', sumDivConq(nums))
