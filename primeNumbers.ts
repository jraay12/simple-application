function primeNumbers(value: number): boolean {

  if (value === 1) return false

  if (value === 2 ) return true

  if (value % 2 === 0) return false

 

  return false
}

console.log(primeNumbers(2))