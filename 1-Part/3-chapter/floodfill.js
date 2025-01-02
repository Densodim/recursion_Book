let im = [
    '..##########################...........'.split(''),
    '..#........................#...####....'.split(''),
    '..#........########........#####..#....'.split(''),
    '..#........#......#...............#....'.split(''),
    '..#####....########.........#######....'.split(''),
    '......#..................####..........'.split(''),
    '......#...####.......#####.............'.split(''),
    '......#####..#########.................'.split(''),
]

let HEIGHT = im.length;
let WIDTH = im[0].length;

function floodFill(image, x, y, newChar, oldChar) {
    if (oldChar === undefined) {
        oldChar = image[y][x];
    }
    if ((oldChar === newChar) || (image[y][x] !== oldChar)) {
        return;
    }

    image[y][x] = newChar;

    // printImage(image)

    if ((y + 1 < HEIGHT) && (image[y + 1][x] === oldChar)){
        floodFill(image, x, y +1, newChar, oldChar )
    }
    if ((y - 1 >= 0) && (image[y - 1][x] === oldChar)){
        floodFill(image, x, y -1, newChar, oldChar)
    }
    if ((x + 1 < WIDTH) && (image[y][x + 1] === oldChar)){
        floodFill(image, x+1, y, newChar, oldChar)
    }
    if ((x - 1 >= 0) && (image[y][x-1] === oldChar)){
        floodFill(image, x-1, y, newChar, oldChar)
    }
    return;
}

function printImage(image) {
    console.log('#########################')
    for (let y = 0; y < HEIGHT; y++){
        for (let x = 0; x < WIDTH; x++){
            console.log(image[y].join(''));
        }
        console.log('#########################\n');
    }
}

printImage(im);
floodFill(im, 3, 3, 'o')
printImage(im)
