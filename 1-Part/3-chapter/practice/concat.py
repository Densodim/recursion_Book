def concat(array):
    # Базовый случай: если массив пуст, вернуть пустую строку
    if len(array) == 0:
        return ''
    elif len(array) == 1:
        return array[0]  # Вернуть единственный элемент
    else:
        head = array[0]
        tail = array[1:]
        return head + concat(tail)


print(concat(['hello', 'world']))
