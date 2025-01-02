def findSubstring(needle, haystact):
    i = 0
    while i < len(haystact):
        if haystact[i:i + len(needle)] == needle:
            return i
        i = i + 1
    return -1

def findSunstringResursion(needle, haystact, i=0):
    if i > len(haystact):
        return -1

    if haystact[i:i + len(needle)] == needle:
        return i
    else:
        return findSunstringResursion(needle, haystact, i+1)

print(findSubstring('cat', 'My cat Zophie'))
print(findSunstringResursion('cat', 'My cat Zophie'))