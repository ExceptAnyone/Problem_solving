const fs = require("fs");
const stdin = fs.readFileSync("input.txt").toString().trim().split(" ");

function solution() {
  console.log(stdin.filter((str) => str !== "").length);
}
solution();
