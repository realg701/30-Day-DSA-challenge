/*
Day 22

### Question 1: Count Digits in a Number
Given a number, your task is to count and return the number of digits in that number.

*Example:*
typescript
function countDigits(num: number): number {
    // Write your logic here
}

// Example usage
console.log(countDigits(12345)); // Output: 5
console.log(countDigits(987));   // Output: 3
*/

// Task 1: Count Digits in a Number

const countDigits = (number: number): number => {
  const digits = number.toString().length;
  return digits;
};

console.log(countDigits(1234)); // output 4

/*
### Question 2: Calculate the Power of a Number
Given a base number b and an exponent e, your task is to calculate b raised to the power of e without using built-in methods like Math.pow.

*Example:*
typescript
function calculatePower(b: number, e: number): number {
    // Write your logic here
}

// Example usage
console.log(calculatePower(2, 3)); // Output: 8
console.log(calculatePower(5, 0)); // Output: 1
*/

// Task 2: Calculate the Power of a Number

const calculatePower = (base: number, exponent: number): number | string => {
  let result: number = 1;

  if (exponent < 0) return "Please insert positive integer";

  for (let i = 0; i < exponent; i++) {
    result *= base;
  }
  return result;
};

console.log(calculatePower(2, 3)); // output: 8
console.log(calculatePower(2, 0)); // output: 1
console.log(calculatePower(2, -1)); // output: 1
