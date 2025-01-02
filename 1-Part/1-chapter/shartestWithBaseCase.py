def shortestWithBaseCase(makeRecursiveCall=None):
    print('shortestWithBaseCase(%s) called.' % makeRecursiveCall)
    if not makeRecursiveCall:
        print('Returning from base case.')
        return
    else:
        shortestWithBaseCase(False)
        print('Returning from base case.')
        return
print('Calling shortestWithBaseCase(False):')
shortestWithBaseCase(False)
print()
print('Calling shortestWithBaseCase(True):')
shortestWithBaseCase(True)