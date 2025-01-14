import turtle

turtle.tracer(10, 0)
turtle.setworldcoordinates(0, 0, 700, 700)
turtle.hideturtle()

MIN_SIZE = 6
DRAW_SOLID = True


def isTooSmall(width, height):
    return width < MIN_SIZE or height < MIN_SIZE


def drawCarpet(x, y, width, height):
    turtle.penup()
    turtle.goto(x, y)

    turtle.pendown()
    if DRAW_SOLID:
        turtle.fillcolor('black')
        turtle.begin_fill()
    turtle.goto(x, y + height)
    turtle.goto(x + width, y + height)
    turtle.goto(x + width, y)
    turtle.goto(x, y)
    if DRAW_SOLID:
        turtle.end_fill()
    turtle.penup()

    drawInnerRectangle(x, y, width, height)


def drawInnerRectangle(x, y, width, height):
    if isTooSmall(width, height):
        return
    else:
        oneThirdWidth = width / 3
        oneThirdHeight = height / 3
        twothirdsWidth = 2 * (width / 3)
        twothirdsHeight = 2 * (height / 3)

        turtle.penup()
        turtle.goto(x + oneThirdWidth, y + oneThirdHeight)

        if DRAW_SOLID:
            turtle.fillcolor('white')
            turtle.begin_fill()
        turtle.pendown()
        turtle.goto(x + oneThirdWidth, y + twothirdsHeight)
        turtle.goto(x + twothirdsWidth, y + twothirdsHeight)
        turtle.goto(x + twothirdsWidth, y + oneThirdHeight)
        turtle.goto(x + oneThirdWidth, y + oneThirdHeight)
        turtle.penup()
        if DRAW_SOLID:
            turtle.end_fill()

        drawInnerRectangle(x, y + twothirdsHeight, oneThirdWidth, oneThirdHeight)
        drawInnerRectangle(x + oneThirdWidth, y + twothirdsHeight, oneThirdWidth, oneThirdHeight)
        drawInnerRectangle(x + twothirdsWidth, y + twothirdsHeight, oneThirdWidth, oneThirdHeight)

        drawInnerRectangle(x, y + oneThirdHeight, oneThirdWidth, oneThirdHeight)
        drawInnerRectangle(x + twothirdsWidth, y + oneThirdHeight, oneThirdWidth, oneThirdHeight)

        drawInnerRectangle(x, y, oneThirdWidth, oneThirdHeight)
        drawInnerRectangle(x + oneThirdWidth, y, oneThirdWidth, oneThirdHeight)
        drawInnerRectangle(x + twothirdsWidth, y, oneThirdWidth, oneThirdHeight)


drawInnerRectangle(150, 150, 500, 500)
turtle.exitonclick()
