//  1- destructuring
let x = 5,
  y = 10;
console.log(`Before swap x: ${x}, y: ${y}`);

[x, y] = [y, x];

console.log(`After swap x: ${x}, y: ${y}`);

// 2- Using rest parameter and spread operator
let a = [1, 7, 5, 8, 9, 2, 0, -1];

let max = (array) => {
  return Math.max(...array);
};

let min = (array) => {
  return Math.min(...array);
};

console.log(`The minimum:${min(a)}`);
console.log(`The maximum:${max(a)}`);

// 3- New array api methods
const fruits = ["apple", "strawberry", "banana", "orange", "mango"];

// a. test that every element in the given array is a string.
const is_string = (element) => typeof element === "string";
console.log(`The given array is a string: ${fruits.every(is_string)}`);

// b.test that some of array elements starts with "a".
const start_with_a = (str) => str.startsWith("a");
console.log(
  `Some of array elements starts with "a": ${fruits.some(start_with_a)}`
);

// c. generate new array filtered from the given array with only elements that starts with "b" or "s".
const start_with_b_or_s = (str) => str.startsWith("b") || str.startsWith("s");
console.log(
  `Array with elements that starts with "b" or "s":[${fruits.filter(
    start_with_b_or_s
  )}]`
);

// d.generate new array, each element of the new array contains a string declaring that you like the give fruit element.
const i_like = (fruit) => "I like " + fruit;
const my_fav = fruits.map(i_like);

// e. use forEach to display all elements of the new array from previouse point.
const display = (element) => console.log(element);
my_fav.forEach(display);
