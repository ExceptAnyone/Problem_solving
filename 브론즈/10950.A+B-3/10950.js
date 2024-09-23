const fs = require("fs");

const stdin = fs.readFileSync("input.txt").toString().split("\n");

const T = parseInt(stdin[0]);

for (let i = 1; i <= T; i++) {
  const [A, B] = stdin[i].split(" ").map(Number);
  console.log(A + B);
}
