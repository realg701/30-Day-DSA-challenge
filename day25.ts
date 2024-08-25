/*
Day 25

### Question 1: Calculate the Difference Between the Sum of Odd and Even Digits
*Problem:* You are given a positive integer. You need to calculate the sum of the odd digits and the sum of the even digits, then find the difference between these two sums. The difference should be positive.

*Example:*
- Input: number = 1234
- Output: 2 (Odd sum: 1 + 3 = 4, Even sum: 2 + 4 = 6, Difference: |4 - 6| = 2)

*Hint:* Convert the number to a string, then check each digit to see if it’s odd or even, and calculate the respective sums.
*/

// Task 1: Calculate the Sum of Odd and Even, and return Difference

const calculateDifference = (number: number): string => {
  // converted to string, can be manipulated in loop
  const num: string = number.toString();
  // individual variable to count the sum
  let even: number = 0;
  let odd: number = 0;
  // for loop to sum even and odd numbers
  for (let i = 0; i < num.length; i++) {
    if (+num[i] % 2 === 0) {
      even += +num[i];
    } else {
      odd += +num[i];
    }
  }
  return `Even: ${even}, Odd: ${odd}, Difference: ${
    even > odd ? even - odd : odd - even
  }`;
}; // condition to eleminate output in negative

console.log(calculateDifference(24));

/*
### Question 2: Find the Smallest Divisor of a Number (Greater than 1)
*Problem:* You are given a positive integer. Your task is to find the smallest divisor of this number that is greater than 1.

*Example:*
- Input: number = 15
- Output: 3 (because 3 is the smallest divisor of 15 that is greater than 1)

*Hint:* Use a loop to check which number divides the integer without leaving a remainder, starting from 2 upwards.
*/

// Task 2: Find the Smallest Divisor of a Number

const smallestDivisor = (number: number): number => {
  let divisor: number = 3;

  if (number % 2 === 0) return 2;

  for (let i = divisor; i * i <= number; i += 2) {
    if (number % i === 0) divisor = i;
  }

  return divisor;
};

console.log(smallestDivisor(15));
