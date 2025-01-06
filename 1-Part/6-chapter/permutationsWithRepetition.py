def getPermsWithRep(chars, permLenght=0, prefix=''):
    indent = '.' * len(prefix)
    print(indent + 'Start, args=("' + chars + '", ' + str(permLenght) + ', "' + prefix + '")')
    if permLenght is None:
        permLenght = len(chars)

    if permLenght == 0:
        print(indent + 'Base case reached, returning', [prefix])
        return [prefix]

    results = []
    print(indent + 'Adding each char to prefix "' + prefix + '".')
    for char in chars:
        newPrefix = prefix + char
        results.extend(getPermsWithRep(chars, permLenght - 1, newPrefix))
    print(indent + 'Returning', results)
    return results


print('All permutations with repetition of JPB128:')
print(getPermsWithRep('JPB128', 4))
