def getBalanceParens(pairs, openRem=None, closeRem=None, current='', indent=0):
    if openRem is None:
        openRem = pairs
    if closeRem is None:
        closeRem = pairs

    print('.' * indent, end='')
    print('Start of pairs=' + str(pairs) + ',openRem = ' + str(openRem) + ', closeRem= ' + str(
        closeRem) + ', current="' + current + '" ')
    if openRem == 0 and closeRem == 0:
        print('.' * indent, end='')
        print('1st base case. Returning' + str([current]))
        return [current]

    results = []
    if openRem > 0:
        print('.' * indent, end='')
        print('Adding open parenthesis')
        results.extend(getBalanceParens(pairs, openRem - 1, closeRem, current + '(', indent + 1))
    if closeRem > openRem:
        print('.' * indent, end='')
        print('Adding close parenthesis')
        results.extend(getBalanceParens(pairs, openRem, closeRem - 1, current + ')', indent + 1))

    print('.' * indent, end='')
    print('2st base case. Returning' + str(results))
    return results


print('All combinations of 2 balanced parentheses:')
print('Results:', getBalanceParens(2))
