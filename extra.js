// Additional assignments for Day 5

function printExtra(extraNum) {
  console.log(`\n------------Extra ${extraNum}------------\n`);
}

/* EXTRA 1
 Write a function called "checkArray" which receives an array of random numbers (created with giveMeRandom) and prints, for each item, whether it's bigger than 5 or not.
 The function should return the sum of just the numbers bigger than 5.
*/

printExtra(1);

function checkArray(array) {
  let numberSum = 0;
  for (let i = 0; i < array.length; i++) {
    if (array[i] > 5) {
      numberSum += array[i];
      console.log(`${array[i]} is greater than 5.`);
    }
  }
  return numberSum;
}

console.log(
  "The sum of the numbers greater than 5 is:",
  checkArray([1, 2, 3, 8, 9])
);

/* EXTRA 2
 In your eCommerce you have an array of objects called shoppingCart. Each one of these objects has a price, a name, an id and the quantity to be shipped.
 Create a function called "shoppingCartTotal" which calculates the total due to the shop.
*/

printExtra(2);

let shoppingCart = [
  {
    name: "Tablet",
    price: 250,
    id: "1111",
    quantity: 1,
  },
  {
    name: "Phone",
    price: 1000,
    id: "1821",
    quantity: 1,
  },
];

function shoppingCartTotal(shoppingCart) {
  let totalCosts = 0;
  for (let i = 0; i < shoppingCart.length; i++) {
    totalCosts += shoppingCart[i].price;
  }
  return totalCosts;
}

console.log("Total costs:", shoppingCartTotal(shoppingCart));

/* EXTRA 3
 In your eCommerce you have an array of objects called shoppingCart. Each one of these objects has a price, a name, an id and the quantity to be shipped.
 Create a function called "addToShoppingCart" which receives a new object, adds it to shoppingCart and returns the total number of items in the shoppingCart.
*/

printExtra(3);

function addToShoppingCart(newItem, shoppingCart) {
  shoppingCart.push(newItem);
  return shoppingCart.length;
}

let newItemToAdd = {
  name: "Charger",
  price: 20,
  id: "1147",
  quantity: 1,
};

console.log(
  "The number of total items is:",
  addToShoppingCart(newItemToAdd, shoppingCart)
);

/* EXTRA 4
 In your eCommerce you have an array of objects called shoppingCart. Each one of these objects has a price, a name, an id and the quantity to be shipped.
 Create a function called "maxShoppingCart" which receives the shoppingCart array and returns the most expensive item in it.
*/

printExtra(4);

function maxShoppingCart(shoppingCart) {
  let mostExpensiveItemPrice = shoppingCart[0].price;
  let mostExpensiveItem = "";
  for (let i = 0; i < shoppingCart.length; i++) {
    if (mostExpensiveItemPrice < shoppingCart[i].price) {
      mostExpensiveItemPrice = shoppingCart[i].price;
      mostExpensiveItem = shoppingCart[i].name;
    }
  }
  return mostExpensiveItem;
}

console.log("The most expensive item is:", maxShoppingCart(shoppingCart));

/* EXTRA 5
 In your eCommerce you have an array of objects called shoppingCart. Each one of these objects has a price, a name, an id and the quantity to be shipped.
 Create a function called "latestShoppingCart" which receives the shoppingCart array and returns the last item.
*/

printExtra(5);

function latestShoppingCart(shoppingCart) {
  return shoppingCart[shoppingCart.length - 1];
}

console.log("Last element:", latestShoppingCart(shoppingCart));

/* EXTRA 6
 Create a function called "loopUntil" which receives an integer x between 0 and 9 as a parameter.
 The function loops and prints a random number between 0 and 9 until the random number is bigger than x for three times in a row.
*/

printExtra(6);

function loopUntil(x) {
  let control = 0;
  while (control < 3) {
    let randomNumber = Math.random() * 9;
    console.log(randomNumber);
    if (randomNumber > x) {
      control += 1;
    } else {
      control = 0;
    }
  }
  return "You reached the end.";
}
console.log(loopUntil(2));

/* EXTRA 7
 Write a function called "average" which receives an array and returns the average numerical value. The function automatically skips non-numeric entries in the array.
*/

printExtra(7);

function average(array) {
  let itemsSum = 0;
  let itemsNumber = array.length;
  for (let i = 0; i < array.length; i++) {
    if (typeof array[i] === "number") {
      itemsSum += array[i];
    } else {
      itemsSum += 0;
      itemsNumber -= 1;
    }
  }
  return itemsSum / itemsNumber;
}

console.log(
  "The average of numerical values is:",
  average([1, 2, 3, true, 4, "hey"])
);

/* EXTRA 8
 Write a function called "longest" to find the longest string from a given array of strings.
*/

printExtra(8);

function longest(arrayOfStrings) {
  let longestStringLength = arrayOfStrings[0].length;
  let longestString = arrayOfStrings[0];
  for (let i = 0; i < arrayOfStrings.length; i++) {
    if (longestStringLength < arrayOfStrings[i].length) {
      longestStringLength = arrayOfStrings[i].length;
      longestString = arrayOfStrings[i];
    }
  }
  return longestString;
}

let arrayOfStrings = ["function", "css", "javascript", "python"];

console.log("The longest string is:", longest(arrayOfStrings));

/* EXTRA 9
 Write a function to create a very simple anti spam filter for your mailbox. The function takes a string emailContent, and returns a boolean.
 The function should return true if the emailContent string does not contain the words SPAM or SCAM.
*/

printExtra(9);

function spamOrScam(emailContent) {
  if (emailContent.includes("spam") || emailContent.includes("scam")) {
    return false;
  } else {
    return true;
  }
}

console.log(spamOrScam("scam"));
console.log(spamOrScam("spam"));
console.log(spamOrScam("none"));

/* EXTRA 10
 Write a function that receives a date as a parameter and calculates the number of days passed since the given date.
*/

printExtra(10);

function calculator(date) {}

/* EXTRA 11
 Write a function called "matrixGenerator" which receives two integers, x and y, as parameters.
 The result should be a matrix of x times y with, as value, the index of the position.
 Ex.: x = 3, y = 2
 ["00","01","02"
 "10","11","12"]
*/

printExtra(11);

function matrixGenerator(x, y) {
  let matrix = [];
  let matrixElement = [];
  for (let i = 0; i < y; i++) {
    matrixElement = [];
    for (let j = 0; j < x; j++) {
      matrixElement.push(`${i}${j}`);
    }
    matrix.push(matrixElement);
  }

  return matrix;
}

console.log(matrixGenerator(3, 2));
