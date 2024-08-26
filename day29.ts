/*
Day 29
Question 1: Calculate the Product of Non-Zero Digits

Description:
Write a TypeScript function that takes a number as input and returns the product of all non-zero digits in the number.
Hint: Loop through each digit, skip zeros, and multiply the rest.

Example:
Input: 4056
Output: 120  // 4 * 5 * 6 = 120
Input: 1002
Output: 2  // 1 * 2 = 2
*/
// Task 1: Calculate the Product of Non-Zero Digits

const nonZeroDigitsProduct = (number: number): number => {
  const numStr = number.toString();
  let result = 1;
  for (let i = 0; i < numStr.length; i++) {
    if (+numStr[i] !== 0) {
      result *= +numStr[i];
    }
  }
  return result;
};

const value = 10203;
console.log(nonZeroDigitsProduct(value));

/*
  Question 2: Find the Difference Between the Largest and Smallest Digit
  
  Description:
  Write a TypeScript function that takes a number as input and returns the difference between its largest and smallest digits.
  Hint: Convert the number to a string or use a loop to identify the largest and smallest digits, then calculate their difference.
  Example:
  Input: 7593
  Output: 6  // 9 - 3 = 6
  Input: 12345
  Output: 4  // 5 - 1 = 4
  */
// Task 2: Find the Difference Between the Largest and Smallest Digit

const findDifference = (number: number): number => {
  const numStr = number.toString();
  let smallest = +numStr[0];
  let largest = +numStr[numStr.length - 1];
  for (let i = 0; i < numStr.length; i++) {
    if (+numStr[i] > largest) {
      largest = +numStr[i];
    }
    if (+numStr[i] < smallest) {
      smallest = +numStr[i];
    }
  }
  return largest - smallest;
};

const value = 10203;
console.log(findDifference(value));
