function exponentByIteration(a, n){
    let result = 1
    for (let i = 0; i < n; i++){
        result *= a;
    }
    return result
}

console.log(exponentByIteration(3, 6))
console.log(exponentByIteration(10, 8))
console.log(exponentByIteration(17, 10))