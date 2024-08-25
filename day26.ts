/*
Day 26
### Question 1: Reverse a Number
Write a function reverseNumber(n: number): number that takes a positive integer n and returns the number with its digits reversed.
Example:
typescript
reverseNumber(1234); // Output: 4321
reverseNumber(567);  // Output: 765 */

// Task 1: Reverse a Number

const reverseNumber = (number: number): number => {
  let digit = 0;
  let result = 0;

  while (number) {
    digit = number % 10;
    result = result * 10 + digit;
    number = (number / 10) | 0;
  }

  return result;
};

let value1: number = 1234;

console.log(reverseNumber(value1));

/*
### Question 2: Find the Average of Numbers in a String

Write a function averageOfNumbersInString(str: string): number that extracts all numbers from a given string, calculates their average, and returns the result.

Example:
typescript
averageOfNumbersInString('The numbers are 12, 15, and 20.'); // Output: 15.666...
averageOfNumbersInString('No numbers here!'); // Output: NaN
*/

// Task 2: Find the Average of Numbers in a String

const averageOfNumbersInString = (string: string) => {
  let sum: number = 0;
  let count: number = 0;
  let matches = string.match(/\d+/g);

  for (let i = 0; i < 10; i++) {
    matches && +matches[i] >= 0 && ((sum += +matches[i]), count++);
  }

  let average: number = sum / count;
  return !average ? "No numbers in string" : average;
};

let value: string = "The numbers are 3, 5, and 7.";

console.log(averageOfNumbersInString(value));
