from showcallstack import showcallstack


def countDownAndUp(number):
    print(number)
    if number == 0:
        print('Reached the base case.')
        return
    else:
        countDownAndUp(number-1)
        showcallstack()
        print(number, 'returning to base case.')
        return
countDownAndUp(3)