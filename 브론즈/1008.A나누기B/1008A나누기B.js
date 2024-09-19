const fs = require("fs");
const stdin = fs
  .readFileSync("input.txt")
  .toString()
  .trim()
  .split(" ")
  .map(Number);

function solution() {
  const [a, b] = stdin;
  console.log(a / b);
}

solution();
