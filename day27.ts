/*Day 27

Question 1: Count the Number of Divisors
Description: Write a TypeScript function that takes a positive integer as input and returns the number of its divisors (factors). A divisor is a number that divides the input number without leaving a remainder.

Hint: Use a loop to check each number from 1 to the given number to see if it divides the number evenly.

*Example:*
Input: 12
Output: 6  // (1, 2, 3, 4, 6, 12)
Input: 7
Output: 2  // (1, 7) */
// Task 1: Count the Number of Divisors

const countDivisors = (number: number): number | string => {
  let divisors = [];
  let j = 0;

  if (number <= 0) return "Enter positive integer";

  for (let i = 0; i <= number; i++) {
    if (number % i === 0) {
      divisors[j] = i;
      j++;
    }
  }
  return divisors.length;
};

let num: number = 24;
console.log(countDivisors(num));

/*
Question 2: Check if a Number is a Perfect Square
Description: Write a TypeScript function that takes a positive integer as input and returns true if the number is a perfect square, otherwise return false. A perfect square is a number that is the square of an integer.

Hint: Use the square root function Math.sqrt() and check if the result is an integer.

Example:
Input: 16
Output: true  // (4 * 4 = 16)
Input: 20
Output: false */
// Task 2: Check if a Number is a Perfect Square

const perfectSquare = (number: number): boolean | string => {
  if (number <= 0) return "Enter positive integer";

  const squareRoot = Math.sqrt(number) % 1 === 0;
  return squareRoot;
};

let number = -16;

console.log(perfectSquare(number));
