// Start Assignment No# 1 (Chapter 1-8)


let firstname, lastname;
firstname = "Muhammad"
lastname = "Hunain"
var address = "main street"
address = "First Street"

console.log(firstname);
console.log(lastname);
console.log(address);

// End Assignment No# 1 (Chapter 1-8)



// Start Assignment No# 2 (Chapter 9-11)

let street = mainstreet = "Gurumandir"
let country = "Pakistan"

let maillingAddress = street + " " + country;

console.log(maillingAddress)


// End Assignment No# 2 (Chapter 9-11)



// Start Assignment No# 3 (12-13)

const score1 = 50;
const score2 = 20;
const score3 = 30;

let totalScore = "Our Total Score is" + "" + (score1 + score2 + score3)

let avgScore = "Our Average Score is" + "" + (score1 + score2 + score3 / 3)

let plates = 20;
let people = 7;

let remaingPlates = plates % people;

remaingPlates + 1 ;

let message = `There are ${remaingPlates} plates avaiable `

console.log (totalScore);
console.log (avgScore);
console.log (remaingPlates);
console.log (message);


// End Assignment No# 3 (12-13)



// Start Assignment No# 4 (Chapter 14-16)

let fruits = ["apple" , "orange" ,"Peach" , "Mango" , 42]
console.log(fruits);
let istFruit = fruits [0];
console.log(istFruit);
fruits[4] = "grapes"
console.log(fruits);

function calculateTotal(subTotal, tax) {
    return subTotal + tax;
}

let order1, order2, order3;
order1 = calculateTotal(100, 20);
order2 = calculateTotal(200, 30);
order3 = calculateTotal(400, 50);



console.log("Order 1 Total:" + order1);
console.log("Order 2 Total:" + order2);
console.log("Order 3 Total:" + order3);
// End Assignment No# 4 (Chapter 14-16)


// Start Assignment No# 4 (Chapter 17-20)


// Declare and initialize an empty multidimensional array
multiArray = [0].push(1,2,3);
multiArray = [1].push(4,5,6);

console.log(multiArray); 
// Output: [[]]

let matrix = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9]
  ];
  
  console.log(matrix);


  let matris = [
    [10, 11, 12],
    [13, 14, 15],
    [16, 17, 18]
  ];
  console.log(matrix);

  for (let i = 1; i <= 10; i++) {
    console.log(i);
  }

  for (let i = 1; i <= 20; i++) {
    console.log(i);
  }

  let tableNumber = parseInt(prompt("Enter the number for multiplication table:"));
let tableLength = parseInt(prompt("Enter the length of the multiplication table:"));

// multiplication table
for (let i = 1; i <= tableLength; i++) {
  console.log(`${tableNumber} x ${i} = ${tableNumber * i}`);
}

let fruit = ["apple", "banana", "Mango", "Orange", "Strawberry"];

// Using for loop to print each item
for (let i = 0; i < fruits.length; i++) {
  console.log(fruits[i]);
}

// 1. Counting
console.log("Counting 1 to 10:");
for (let i = 1; i <= 10; i++) {
  console.log(i);
}

// 2. Reverse Counting
console.log("\nReverse Counting 10 to 1:");
for (let i = 10; i >= 1; i--) {
  console.log(i);
}

// 3. Even Numbers
console.log("\nEven Numbers 0 to 20:");
for (let i = 0; i <= 20; i += 2) {
  console.log(i);
}

// 4. Odd Numbers
console.log("\nOdd Numbers 1 to 19:");
for (let i = 1; i < 20; i += 2) {
  console.log(i);
}

// 5. Series 
console.log("\nSeries 2k to 20k:");
for (let i = 2; i <= 20; i += 2) {
  console.log(i + "k");
}

let A = ["cake", "apple", "pie", "cookie", "chips", "patties"];

// Prompt
let searchItem = prompt("Enter the item you want to search for:");

// Check 
if (A.includes(searchItem.toLowerCase())) {
  alert("Item found in the list!");
} else {
  alert("Item not found in the list.");
}

let b = [24, 53, 78, 91, 12];

let smallestNumber = Math.min(...b);

console.log("The smallest number in the array is:", smallestNumber);

let start = 1;
let end = 100;

for (let i = start; i <= end; i++) {
  if (i % 5 === 0) { 
    console.log(i);
  }
}
// End Assignment No# 4 (Chapter 17-20)