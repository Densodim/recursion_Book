let MAZE = `
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
`.split('\n')

const EMPTY = ' ';
const START = 'S';
const EXIT = 'E';
const PATH = '.';

const HEAIGHT = MAZE.length;
let maxWidthSoFar = MAZE[0].length;
for (let row of MAZE) {
    if (row.length > maxWidthSoFar) {
        maxWidthSoFar = row.length;
    }
}

const WIDTH = maxWidthSoFar
for (let i = 0; i < MAZE.length; i++) {
    MAZE[i] = MAZE[i].split('');
    if (MAZE[i].length !== WIDTH) {
        MAZE[i] = EMPTY.repeat(WIDTH).split('')
    }
}

function printMaze(maze) {
    // console.log('.........')
    // for (let y = 0; y < HEAIGHT; y++) {
    //     for (let x = 0; x < WIDTH; x++) {
    //         console.log(maze[y][x])
    //     }
    // }
    console.log(maze.map(row => row.join('')).join('\n'));
}

function findStart(maze) {
    for (let x = 0; x < WIDTH; x++) {
        for (let y = 0; y < HEAIGHT; y++) {
            if (maze[y][x] === START) {
                return [x, y]
            }
        }
    }
}

function solveMaze(maze, x, y, visited) {
    if (x === undefined || y === undefined) {
        [x, y] = findStart(maze)
        maze[y][x] = EMPTY
    }
    if (visited === undefined) {
        visited = []
    }

    if (maze[y][x] === EXIT) {
        return true
    }

    maze[y][x] = PATH
    visited.push(String(x) + ',' + String(y))

    // printMaze(maze)

    if ((y + 1 < HEAIGHT) && ((maze[y + 1][x] === EMPTY) || (maze[y + 1][x] === EXIT)) && (visited.indexOf(String(x) + ',' + String(y + 1)) === -1)) {
        if (solveMaze(maze, x, y + 1, visited)) {
            return true
        }
    }
    if ((y - 1 >= 0) && ((maze[y - 1][x] === EMPTY) || (maze[y - 1][x] === EXIT)) && (visited.indexOf(String(x) + ',' + String(y - 1)) === -1)) {
        if (solveMaze(maze, x, y - 1, visited)) {
            return true
        }
    }
    if ((x + 1 < WIDTH) && ((maze[y][x + 1] === EMPTY) || (maze[y][x + 1] === EXIT)) && (visited.indexOf(String(x + 1) + ',' + String(y)) === -1)) {
        if (solveMaze(maze, x + 1, y, visited)) {
            return true
        }
    }
    if ((x - 1 >= 0) && ((maze[y][x - 1] === EMPTY) || (maze[y][x - 1] === EXIT)) && (visited.indexOf(String(x - 1) + ',' + String(y)) === -1)) {
        if (solveMaze(maze, x - 1, y, visited)) {
            return true
        }
    }
    maze[y][x] = EMPTY
    // printMaze(maze)
    return false
}

printMaze(MAZE)
solveMaze(MAZE)
printMaze(MAZE)