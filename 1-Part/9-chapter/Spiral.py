import turtle

turtle.tracer(1, 0)
for i in range(360):
    turtle.backward(i)
    turtle.right(59)
    turtle.pensize(2)
turtle.exitonclick()
