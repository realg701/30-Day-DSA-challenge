/**Day 30*

**Question 1: Convert Number to Words**

**Problem:**
Write a TypeScript function that takes a number between `0` and `99` and returns the number in words. For example, if the input is `45`, the output should be `"Forty-Five"`.

**Hint:**
- Create arrays for single digits (`0-9`), teens (`10-19`), and tens (`20, 30, ... 90`).
- Handle different cases separately: numbers less than `10`, between `10 and 19`, and between `20 and 99`.

**Function Signature:**
```typescript
function numberToWords(num: number): string {
  // Your code here
}
```
*/
// Task 1: Convert Number to Words

const numberToWords = (number: number): string => {
  const singleDigits = [
    "",
    "One",
    "Two",
    "Three",
    "Four",
    "Five",
    "Six",
    "Seven",
    "Eight",
    "Nine",
  ];
  const doubleDigits = [
    "Ten",
    "Eleven",
    "Twelve",
    "Thirteen",
    "Fourteen",
    "Fifteen",
    "Sixteen",
    "Seventeen",
    "Eighteen",
    "Nineteen",
  ];
  const belowHundreds = [
    "Twenty",
    "Thirty",
    "Fourty",
    "Fifty",
    "Sixty",
    "Seventy",
    "Eighty",
    "Ninty",
  ];

  if (number < 0 || number > 99) return "Integer is below 0 or above 99";
  if (number < 10) return singleDigits[number];
  if (number >= 10 && number < 20) return doubleDigits[number % 10];
  return (
    belowHundreds[Math.floor(number / 10) - 2] + " " + singleDigits[number % 10]
  );
};

console.log(numberToWords(9)); // "Nine"
console.log(numberToWords(11)); // "Eleven"
console.log(numberToWords(21)); // "Twenty One"

/*
**Question 2: Calculate the Sum of the First `n` Natural Numbers**

**Problem:**
Write a TypeScript function that takes a positive integer `n` and returns the sum of the first `n` natural numbers. For example, if `n = 5`, the output should be `15` (because `1 + 2 + 3 + 4 + 5 = 15`).

**Hint:**
- Use the formula for the sum of the first `n` natural numbers: \(\text{Sum} = \frac{n \times (n + 1)}{2}\).
- Alternatively, implement the sum using a loop that adds each number from `1` to `n`.

**Function Signature:**
```typescript
function sumOfNaturalNumbers(n: number): number {
  // Your code here
}
```
*/
// Task 2: Calculate the Sum of the First `n` Natural Numbers

const sumOfNaturalNumbers = (number: number): number => {
  let sum = 0;
  for (let i = 0; i <= number; i++) {
    sum += i;
  }
  return sum;
};

console.log(sumOfNaturalNumbers(6)); // 21
