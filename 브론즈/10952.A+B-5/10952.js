const fs = require("fs");
const input = fs.readFileSync("input.txt").toString().trim().split("\n");

input.forEach((line) => {
  const [a, b] = line.split(" ").map(Number);
  if (a === 0 && b === 0) return;
  console.log(a + b);
});
