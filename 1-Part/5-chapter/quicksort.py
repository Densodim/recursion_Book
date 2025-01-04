def quicksort(items, left=None, right=None):
    if left is None:
        left = 0
    if right is None:
        right = len(items) - 1
    print('\nquicksort() called on this range:', items[left:right + 1])
    print('................ The full list is:', items)

    if right <= left:
        return

    i = left
    pivotValue = items[right]
    print('.............. The pivot is:', pivotValue)

    for j in range(left, right):
        if items[j] < pivotValue:
            items[i], items[j] = items[j], items[i]
            i += 1
    items[i], items[right] = items[right], items[i]

    print('... After swapping, the range is:', items[left:right + 1])
    print('Recursively calling quicksort on:', items[left:i], 'and', items[i + 1:right + 1])

    quicksort(items, left, i - 1)
    quicksort(items, i + 1, right)


myList = [0, 5, 9, 4, 8, 2, 7, 6, 1]
quicksort(myList)
print(myList)
