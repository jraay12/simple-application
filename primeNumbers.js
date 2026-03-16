function primeNumbers(value) {
    if (value === 1)
        return false;
    if (value < 0)
        return false;
    if (value % 1 === 0) {
        return true;
    }
    return false;
}
console.log(primeNumbers(4));
