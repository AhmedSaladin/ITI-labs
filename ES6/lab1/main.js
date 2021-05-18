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
