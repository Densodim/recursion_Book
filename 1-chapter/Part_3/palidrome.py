def isPalibrome(theString):
    if len(theString) == 0 or len(theString) == 1:
        return True
    else:
        head = theString[0]
        middle = theString[1: -1]
        last = theString[-1]
        return head == last and isPalibrome(middle)

text = 'racecar'
print(text + 'is a palidrome:' + str(isPalibrome(text)))
text = 'tacocat'
print(text + 'is a palidrome:' + str(isPalibrome(text)))
text = 'xophie'
print(text + 'is a palidrome:' + str(isPalibrome(text)))
