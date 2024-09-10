const input = require("fs")
  .readFileSync("input.txt")
  .toString()
  .trim()
  .split("\n");

const numbers = input[1].split("").map((num) => Number(num));
const result = numbers.reduce((acc, cur) => acc + cur);
console.log(result);
