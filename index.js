/*
ASSIGNMENT RULES
- All the answers must be written in JavaScript
- You can ask for help, reach the Teaching Assistants if needed
- You can Google / use StackOverflow BUT only when you think you need something we didn't cover during lessons yet
- You can test your code in a separate file or de-commenting the single exercises in this one.
- You can use the bash terminal, the VSCode terminal or the one embedded in your Operating System if you're using macOS or Linux.
- The solution must be pushed to the repository and be available for the tutors by the end of the day (5PM CET)
*/

function printExercise(exerciseNum) {
  console.log(`\n------------Exercise ${exerciseNum}------------\n`);
}

/* EXERCISE 1
 Write a function called "area" which receives 2 parameters (l1, l2) and calculates the area of the associated rectangle.
*/

printExercise(1);

function area(l1, l2) {
  return l1 * l2;
}
console.log("The area of the rectangle is:", area(5, 4));

/* EXERCISE 2
 Write a function called "crazySum" which receives two integers as parameters.
 It should return the sum of those two values, but if the two values are the same then it should return their sum multiplied by 3.
*/

printExercise(2);

function crazySum(num1, num2) {
  if (num1 === num2) {
    return `The crazy sum is: ${(num1 + num2) * 3}`;
  } else {
    return `The sum is: ${num1 + num2}`;
  }
}

console.log(crazySum(3, 3));
console.log(crazySum(5, 1));

/* EXERCISE 3
 Write a function called "crazyDiff" that computes the absolute difference between a given number and 19.
 It should return triple their absolute difference if the given number is greater than 19.
*/
printExercise(3);

function crazyDiff(number) {
  if (number > 19) {
    return `The crazy difference is: ${Math.abs(number - 19) * 3}`;
  } else {
    return `The diffrence is: ${Math.abs(number - 19)}`;
  }
}

console.log(crazyDiff(2));
console.log(crazyDiff(25));

/* EXERCISE 4
 Write a function called "boundary" which accept an integer parameter n and returns true if n is within 20 and 100 (included) or if n it's equal to 400.
*/

printExercise(4);

function boundary(n) {
  if ((n >= 20 && n <= 100) || n === 400) {
    return true;
  } else {
    return false;
  }
}

console.log(boundary(100));

/* EXERCISE 5
 Write a function called "strivify" which accepts a string as a parameter.
 It should add the word "Strive" in front of the given string, but if the given string already begins with "Strive", then it should just return the original string.
*/

printExercise(5);

function strivify(string) {
  if (string.startsWith("Strive")) {
    return string;
  } else {
    return "Strive" + string;
  }
}

console.log(strivify("Strive"));
console.log(strivify("string"));

/* EXERCISE 6
 Write a function called "check3and7" which accepts a positive number as a parameter and checks if it is a multiple of 3 or a multiple of 7.
 HINT: Modulus Operator
*/

printExercise(6);

function check3and7(number) {
  if (number >= 0) {
    if (number % 3 === 0 || number % 7 === 0) {
      return `Number ${number} is a multiple of 3 or 7.`;
    } else {
      return `Number ${number} is not a multiple of 3 or 7.`;
    }
  } else {
    return `Number ${number} is a negative number.`;
  }
}

console.log(check3and7(-1));
console.log(check3and7(21));

/* EXERCISE 7
 Write a function called "reverseString" which programmatically reverses a given string (es.: Strive => evirtS).
*/

printExercise(7);

function reverseString(string) {
  let newString = "";

  for (let i = string.length - 1; i >= 0; i--) {
    newString += string[i];
  }
  return newString;
  // return string.split("").reverse().join("");
}

console.log(reverseString("hello"));

/* EXERCISE 8
 Write a function called "upperFirst" which capitalizes the first letter of each word of a given string passed as a parameter.
*/

printExercise(8);

function upperFirst(string) {
  let stringArray = string.split(" ");
  for (let i = 0; i < stringArray.length; i++) {
    stringArray[i] =
      stringArray[i].charAt(0).toUpperCase() + stringArray[i].slice(1);
  }
  return stringArray.join(" ");
}

console.log(upperFirst("hello everybody. i hope you are well."));

/* EXERCISE 9
 Write a function called "cutString" which creates a new string without the first and last character of a given string passed as a parameter.
*/

printExercise(9);

function cutString(string) {
  let newString = string.slice(1, -1);
  return newString;
}

console.log("The new string is:", cutString("zaide"));

/* EXERCISE 10
 Write a function called "giveMeRandom" which accepts a number n and returns an array containing n random numbers between 0 and 10.
*/

printExercise(10);

function giveMeRandom(n) {
  let randomNumbersArray = [];
  for (let i = 0; i < n; i++) {
    randomNumbersArray.push(Math.floor(Math.random() * 11));
  }
  return randomNumbersArray;
}

console.log("Array with random numbers between 0 and 10:", giveMeRandom(3));
