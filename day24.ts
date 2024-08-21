/*
Day 24

### Question 1: **Generate Fibonacci Sequence**
Write a function `generateFibonacci(n: number): number[]` that generates and returns the first `n` numbers of the Fibonacci sequence. The Fibonacci sequence starts with 0 and 1, and each subsequent number is the sum of the previous two.

**Hint:** Use a loop or recursion to build the sequence.

**Example:**
```typescript
generateFibonacci(5); // Output: [0, 1, 1, 2, 3]
generateFibonacci(7); // Output: [0, 1, 1, 2, 3, 5, 8]
*/
// Task 1: Generate Fibonacci Sequence

const generateFibonacci = (n: number): number[] => {
  const fibo: number[] = [];

  let secondLast: number = 0;
  let last: number = 1;
  let current;

  for (let i = 0; i < n; i++) {
    fibo[i] = secondLast;
    current = secondLast + last;
    secondLast = last;
    last = current;
  }

  return fibo;
};

console.log(generateFibonacci(5));

/*
### Question 2: **Replace Vowels with Asterisks**
Write a function `replaceVowels(str: string): string` that takes a string `str` and returns a new string where all vowels (`a, e, i, o, u`) are replaced with asterisks (`*`). The function should be case-insensitive.

**Hint:** You can use a loop or a regular expression to find and replace vowels.

**Example:**
```typescript
replaceVowels('Hello World'); // Output: 'H*ll* W*rld'
replaceVowels('TypeScript');  // Output: 'Typ*Scr*pt'
*/
// Task 2: Replace Vowels with Asterisks

const replaceVowels = (str: string): string => {
  const vowels: string = "aeiouAEIOU";
  let result: string = "";

  for (let i = 0; i < str.length; i++) {
    if (vowels.includes(str[i])) result += "*";
    else result += str[i];
  }
  return result;
};

console.log(replaceVowels("Hello world"));
