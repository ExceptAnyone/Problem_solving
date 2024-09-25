const fs = require("fs");
const stdin = fs
  .readFileSync("input.txt")
  .toString()
  .trim()
  .split("\n")
  .map(Number);

for (let i = 1; i <= stdin[0]; i++) {
  let result = "";
  for (let j = 0; j < i; j++) {
    result += "*";
  }
  console.log(result);
}
