import turtle
turtle.tracer(10, 0)
turtle.setworldcoordinates(0, 0, 700, 700)
turtle.hideturtle()
turtle.pensize(2)

def drawKochCurve(startPosition, heading, lenght):
    if lenght < 1:
        return
    else:
        recursiveArgs = []
        turtle.penup()
        turtle.goto(startPosition)
        turtle.setheading(heading)
        recursiveArgs.append({'position':turtle.position(), 'heading':turtle.heading()})

        turtle.forward(lenght/3)
        turtle.pencolor('white')
        turtle.pendown()
        turtle.forward(lenght/3)

        turtle.backward(lenght/3)
        turtle.left(60)
        recursiveArgs.append({'position':turtle.position(), 'heading':turtle.heading()})
        turtle.pencolor('black')
        turtle.forward(lenght/3)
        turtle.right(120)
        recursiveArgs.append({'position':turtle.position(), 'heading':turtle.heading()})
        turtle.forward(lenght/3)
        turtle.left(60)
        recursiveArgs.append({'position':turtle.position(), 'heading':turtle.heading()})

        for i in range(4):
            drawKochCurve(recursiveArgs[i]['position'], recursiveArgs[i]['heading'], lenght/3)
        return

def drawKochSnowflake(startPosition, heading, lenght):

    turtle.penup()
    turtle.goto(startPosition)
    turtle.setheading(heading)
    for i in range(3):
        curveStartingPosition = turtle.position()
        curveStartingHeading = turtle.heading()
        drawKochCurve(curveStartingPosition, curveStartingHeading, lenght)

        turtle.penup()
        turtle.goto(curveStartingPosition)
        turtle.setheading(curveStartingHeading)

        turtle.forward(lenght)
        turtle.right(120)

drawKochSnowflake((100, 500), 0, 500)
turtle.exitonclick()