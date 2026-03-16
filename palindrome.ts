function palindrome_ts(value: string): string {
  let start = 0;
  let end = value.length - 1;

  while (start < end) {
    if (value[start] === value[end]) {
      return `${value} is a Palindrome`;
    }

    return `${value} is not a Palindrome`;
  }

  return ""
}

console.log(palindrome_ts("NITIN"));
