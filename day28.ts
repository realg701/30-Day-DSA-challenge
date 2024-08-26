/*
Day 28

Question 1: Armstrong Number Checker (Without Using split)
*Problem:* Check if a given number is an Armstrong number. An Armstrong number is a number that is equal to the sum of its own digits each raised to the power of the number of digits.

*JHint:*
1. First, count the number of digits in the given number.
2. Then, iterate through each digit by extracting it one by one.
3. Raise each digit to the power of the total number of digits and accumulate the result.
4. Finally, compare the accumulated sum to the original number to determine if it is an Armstrong number.
*/
// Task 1: Armstrong Number Checker

const computePower = (number: number, exponent: number): number => {
  let result = 1;
  for (let i = 0; i < exponent; i++) {
    result *= number;
  }
  return result;
};

const isArmstrongNumber = (number: number): boolean => {
  const numStr = number.toString();
  const count = numStr.length;
  let sum = 0;
  for (let i = 0; i < count; i++) {
    sum += computePower(+numStr[i], count);
  }

  return sum === number;
};

let value: number = 1634;

console.log(isArmstrongNumber(value));
/*
### Question 2: Find the LCM (Least Common Multiple)
*Problem:* Find the Least Common Multiple (LCM) of two numbers. LCM is the smallest number that is a multiple of both given numbers.

*Hint:*
1. Calculate the Greatest Common Divisor (GCD) of the two numbers using the Euclidean algorithm.
2. Use the GCD to find the LCM with the formula:
*/
// Task 2: Find the LCM (Least Common Multiple)

function calculateGCD(a: number, b: number): number {
  while (b !== 0) {
    const temp = b;
    b = a % b;
    a = temp;
  }
  return a;
}

function findLCM(a: number, b: number): number {
  return Math.abs(a * b) / calculateGCD(a, b);
}

// Example Usage
console.log(findLCM(4, 5)); // 20
console.log(findLCM(12, 15)); // 60
