def rev(theString):
    if len(theString) == 0 or len(theString) == 1:
        return theString
    else:
        head = theString[0]
        tail = theString[1:]
        return rev(tail) + head


print(rev('abcdefghijklmnop'))
print(rev('Hello world'))
