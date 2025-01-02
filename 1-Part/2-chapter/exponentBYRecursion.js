function exponentBYRecursion(a, n) {
    if (n === 1){
        return a;
    }else if (n % 2 === 0){
        let result = exponentBYRecursion(a, n/2)
        return result * result
    }else if (n % 2 === 1){
        let result = exponentBYRecursion(a, Math.floor(n/2));
        return result * result * a
    }
}

console.log(exponentBYRecursion(3, 6))
console.log(exponentBYRecursion(10, 3))
console.log(exponentBYRecursion(17, 10))