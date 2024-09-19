const fs = require("fs");
const stdin = fs.readFileSync("input.txt").toString().trim();

function solution() {
  const [a, b] = stdin.split(" ").map(Number);
  console.log(a - b);
}
solution();
