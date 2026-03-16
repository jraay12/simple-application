function fibonacci(n) {
    if (n === void 0) { n = 1; }
    var previousValue = 0;
    var numbers = [1];
    for (var i = 1; i < n; i++) {
        previousValue += i;
        numbers.push(previousValue);
    }
    return numbers;
}
console.log(fibonacci(3));
