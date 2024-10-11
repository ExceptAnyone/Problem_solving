const fs = require("fs");
const input = fs
  .readFileSync("input.txt")
  .toString()
  .trim()
  .split("\n")
  .map(Number);

const result = input.map((v) => v % 42);
const set = new Set(result);
const arr = [...set];
console.log(arr.length);
