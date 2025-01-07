def getPowerSet(chars, indent=0):
    debugMsg = '.' * indent + 'In getPoserSet("' + chars + '")'
    print(debugMsg + ', start.')

    #     Base case
    if chars == '':
        print(debugMsg + "base case returns []")
        return ['']

    #     recursion case
    powerSet = []
    head = chars[0]
    tail = chars[1:]
    print(debugMsg, "part 1, sets without head '" + head + "'")
    tailPowerSet = getPowerSet(tail, indent + 1)

    print(debugMsg, "part2, get sets with head '" + head + "'")
    for tailSet in tailPowerSet:
        print(debugMsg, 'New set', head + tailSet)
        powerSet.append(head + tailSet)

    powerSet = powerSet + tailPowerSet
    print(debugMsg, 'returning', powerSet)
    return powerSet


print('The power set of ABC:')
print(getPowerSet('ABC'))
