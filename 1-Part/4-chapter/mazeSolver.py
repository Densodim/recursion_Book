MAZE = """ 
#######################################################################
#S#                 #       # #   #     #         #     #   #         #
# ##### ######### # ### ### # # # # ### # # ##### # ### # # ##### # ###
# #   #     #     #     #   # # #   # #   # #       # # # #     # #   #
# # # ##### # ########### ### # ##### ##### ######### # # ##### ### # #
#   #     # # #     #   #   #   #         #       #   #   #   #   # # #
######### # # # ##### # ### # ########### ####### # # ##### ##### ### #
#       # # # #     # #     # #   #   #   #     # # #   #         #   #
# # ##### # # ### # # ####### # # # # # # # ##### ### ### ######### # #
# # #   # # #   # # #     #     #   #   #   #   #   #     #         # #
### # # # # ### # # ##### ####### ########### # ### # ##### ##### ### #
#   # #   # #   # #     #   #     #       #   #     # #     #     #   #
# ### ####### ##### ### ### ####### ##### # ######### ### ### ##### ###
#   #         #     #     #       #   # #   # #     #   # #   # #   # #
### ########### # ####### ####### ### # ##### # # ##### # # ### # ### #
#   #   #       # #     #   #   #     #       # # #     # # #   # #   #
# ### # # ####### # ### ##### # ####### ### ### # # ####### # # # ### #
#     #         #     #       #           #     #           # #      E#
#######################################################################
""".split('\n')

EMPTY = ' '
START = 'S'
EXIT = 'E'
PATH = '.'

HEIGHT = len(MAZE)
WIDTH = 0

for row in MAZE:
    if len(row) > WIDTH:
        WIDTH = len(row)
for i in range(len(MAZE)):
    MAZE[i] = list(MAZE[i])
    if len(MAZE[i]) is not WIDTH:
        MAZE[i] = [EMPTY] * WIDTH


def printMaze(maze):
    for y in range(HEIGHT):
        for x in range(WIDTH):
            print(maze[y][x], end='')
        print()
    print()


def findStart(maze):
    for x in range(WIDTH):
        for y in range(HEIGHT):
            if maze[y][x] == START:
                return (x, y)


def solveMaze(maze, x=None, y=None, vitited=None):
    if x == None and y == None:
        x, y = findStart(maze)
        maze[y][x] = EMPTY
    if vitited == None:
        vitited = []

    if maze[y][x] == EXIT:
        return True

    maze[y][x] = PATH
    vitited.append(str(x) + ',' + str(y))
    # printMaze(maze)

    if y + 1 < HEIGHT and maze[y + 1][x] in (EMPTY, EXIT) and str(x) + ',' + str(y + 1) not in vitited:
        if solveMaze(maze, x, y + 1, vitited):
            return True
    if y - 1 >= 0 and maze[y - 1][x] in (EMPTY, EXIT) and str(x) + ',' + str(y - 1) not in vitited:
        if solveMaze(maze, x, y - 1, vitited):
            return True
    if x + 1 < WIDTH and maze[y][x + 1] in (EMPTY, EXIT) and str(x + 1) + ',' + str(y) not in vitited:
        if solveMaze(maze, x + 1, y, vitited):
            return True
    if x - 1 >= 0 and maze[y][x - 1] in (EMPTY, EXIT) and str(x - 1) + ',' + str(y) not in vitited:
        if solveMaze(maze, x - 1, y, vitited):
            return True

    maze[y][x] = EMPTY
    # printMaze(maze)

    return False


printMaze(MAZE)
solveMaze(MAZE)
printMaze(MAZE)
