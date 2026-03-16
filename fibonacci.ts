function fibonacci(n: number = 1): number[] {
let previousValue: number[] = [] 
const numbers: number[] = []
 for(let i = 1; i < n; i++){
  previousValue += i
  numbers.push(previousValue)
 }


 return numbers
}

console.log(fibonacci(3))

// F (1) = 1, 1, 2, 3, 5, 8, 13, 21, 34