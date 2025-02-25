import random
import time
import turtle

turtle.tracer(100, 0)
turtle.setworldcoordinates(0, 0, 700, 700)
turtle.hideturtle()


def drawBranch(startPosition, direction, branchLenght):
    if branchLenght < 5:
        return

    turtle.penup()
    turtle.goto(startPosition)
    turtle.setheading(direction)

    turtle.pendown()
    turtle.pensize(max(branchLenght / 7.0, 1))
    turtle.forward(branchLenght)

    endPosition = turtle.position()
    leftDirection = direction + LEFT_ANGLE
    leftBranchLenght = branchLenght - LEFT_DECREASE
    rightDirection = direction - RIGHT_ANGLE
    rightBranchLength = branchLenght - RIGHT_DECREASE

    drawBranch(endPosition, leftDirection, leftBranchLenght)
    drawBranch(endPosition, rightDirection, rightBranchLength)


seed = 0
while True:
    random.seed(seed)
    LEFT_ANGLE = random.randint(10, 30)
    LEFT_DECREASE = random.randint(8, 15)
    RIGHT_ANGLE = random.randint(10, 30)
    RIGHT_DECREASE = random.randint(8, 15)
    START_LENGTH = random.randint(80, 120)

    turtle.clear()
    turtle.penup()
    turtle.goto(10, 10)
    turtle.write('SSeed: %s' % seed)

    drawBranch((350, 10), 90, START_LENGTH)
    turtle.update()
    time.sleep(2)

    seed = seed + 1


