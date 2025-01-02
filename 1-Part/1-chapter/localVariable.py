def a():
    spam = 'Art'
    print('spam is' + spam)
    b()
    print('spam is' + spam)

def b():
    spam = 'Bodcam'
    print('spam is' + spam)
    c()
    print('spam is' + spam)

def c():
    spam = 'Coyote'
    print('spam is' + spam)
a()