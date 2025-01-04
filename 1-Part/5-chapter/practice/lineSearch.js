function lineSeach(neddle, haystack) {
    for (let j = 0; j < 1000000; j++) {
        for (let i = 0; i < haystack.length; i++) {
            if (neddle === haystack[i]) {
                return true
            }
        }
    }
    return false
}

let haystack = [1, 2, 3, 8, 10, 13, 16, 20, 36];

console.time("Line Search");
console.log(lineSeach(8, haystack)); // true
console.timeEnd("Line Search");

console.time("Line Search - Not Found");
console.log(lineSeach(99, haystack)); // false
console.timeEnd("Line Search - Not Found");