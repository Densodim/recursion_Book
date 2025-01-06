def getCombos(chars, k, indent=0):
    debugMsg = '.' * indent + "In getCombos('" + chars + "', " + str(k) + ")"
    print(debugMsg + ', start.')

    if k == 0:
        print(debugMsg + "base case returns []")
        return ['']
    elif chars == '':
        print(debugMsg + ' base case returns []')
        return []

    combinations = []

    head = chars[:1]
    tail = chars[1:]
    print(debugMsg + " part 1, get combos with head '" + head + "'")
    tailCombos = getCombos(tail, k - 1, indent + 1)
    print('.' * indent + "Adding head '" + head + "' to tail combos:")
    for tailCombo in tailCombos:
        print('.' * indent + 'New combination', head + tailCombo)
        combinations.append(head + tailCombo)

    combinations.extend(getCombos(tail, k, indent + 1))

    print(debugMsg + 'results are', combinations)
    return combinations

print('2-combinations of "ABC":')
print('Results:', getCombos('ABC', 2))
