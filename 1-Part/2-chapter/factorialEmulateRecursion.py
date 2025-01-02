
callStake = []
callStake.append({'returnAddr':'start', 'number':5})
returnValue = None

while len(callStake) > 0:
    number = callStake[-1]['number']
    returnAddr = callStake[-1]['returnAddr']
    if returnAddr == 'start':
        if number == 1:
            returnValue = 1
            callStake.pop()
            continue
        else:
            callStake[-1]['returnAddr'] = 'after recursive call'
            callStake.append({'returnAddr': 'start', 'number':number - 1})
            continue
    elif returnAddr == 'after recursive call':
        returnValue = number * returnValue
        callStake.pop()
        continue
print(returnValue)