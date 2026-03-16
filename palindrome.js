function palindrome(value) {
    var start = 0;
    var end = value.length - 1;
    while (start < end) {
        if (value[start] === value[end]) {
            return "".concat(value, " is a Palindrome");
        }
        return "".concat(value, " is not a Palindrome");
    }
    return "";
}

console.log(palindrome("123454321"));
