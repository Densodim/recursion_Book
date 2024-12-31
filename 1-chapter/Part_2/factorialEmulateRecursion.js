let callStake = [];
callStake.push({'returnAddr': 'start', 'number': 5})

let returnValue

while (callStake.length > 0) {
    let number = callStake[callStake.length - 1]['number'];

    let returnAddr = callStake[callStake.length - 1]['returnAddr'];

    if (returnAddr == 'start') {
        if (number === 1) {
            returnValue = 1;
            callStake.pop();
            continue;
        } else {
            callStake[callStake.length - 1]['returnAddr'] = 'after recursive call';
            callStake.push({'returnAddr': 'start', 'number': number - 1});
            continue;
        }
    } else if (returnAddr == 'after recursive call') {
        returnValue = number * returnValue;
        callStake.pop();
        continue;
    }
}
console.log(returnValue)
