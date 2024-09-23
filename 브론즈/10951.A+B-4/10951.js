const fs = require("fs");
const stdin = fs.readFileSync("input.txt").toString().trim().split("\n");

function solution() {
  stdin.forEach((str) => {
    const [a, b] = str.split(" ").map(Number);
    console.log(a + b);
  });
}

solution();
