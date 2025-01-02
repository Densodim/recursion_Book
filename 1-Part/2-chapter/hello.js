console.log('Code in a loop:');
let i = 0
while (i < 5) {
    console.log(`${i} Hello, world`)
    i = i + 1
}

console.log('Code in a function')

function hello(i) {
    if (i === undefined) {
        i = 0
    }
    console.log(`${i} Hello world`)
    i = i + 1
    if (i < 5) {
        hello(i);
    } else {
        return;
    }
}

hello();