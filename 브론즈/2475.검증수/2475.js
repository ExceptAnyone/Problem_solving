const fs = require("fs");
const stdin = fs
  .readFileSync("input.txt")
  .toString()
  .trim()
  .split(" ")
  .map(Number);

function solution() {
  let sum = 0;
  stdin.forEach((num) => {
    num = num ** 2;
    sum += num;
    sum %= 10;
  });
  console.log(sum);
}

solution();
