def a():
    print('a() was colled')
    b()
    print('a() was returning')
def b():
    print('b() was colled')
    c()
    print('b() was returning')
def c():
    print('c() was colled')
    print('c() was returning')
a()