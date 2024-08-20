/*Day 23

### Question 1: Calculate the Factorial of a Number
*Task*: Write a function `calculateFactorial` that takes a number as input and returns its factorial.

*Hint*: Factorial means multiplying a number by all positive integers less than it. For example, the factorial of 5 is 5 * 4 * 3 * 2 * 1 = 120.
*/

// Task 1: Calculate the Factorial of a Number

const calculateFactorial = (number: number): number => {
  let factorial = 1;
  for (let i = 1; i <= number; i++) {
    factorial *= i;
  }

  return factorial;
};

let number: number = 5;

console.log("Factorial of", number, "is", calculateFactorial(number)); // output: Factorial of 5 is 120

/*
### Question 2: Convert a Number to Binary (Without Using Built-in Functions)
*Task*: Write a function `convertToBinary` that takes a number as input and converts it into its binary form.

*Hint*: Repeatedly divide the number by 2 and note down the remainder. Join the remainders in reverse order to get the binary representation.
*/

// Task 2: Convert a Number to Binary

const convertToBinary = (decimal: number) => {
  let binary = "";
  for (; decimal > 0; decimal >>= 1) {
    binary = (decimal & 1) + binary;
  }
  return binary || "0";
};

const number = 2;

console.log("Binary:", convertToBinary(number));
