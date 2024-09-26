const fs = require("fs");
const stdin = fs.readFileSync("input.txt").toString().trim().split("");

function solution() {
  for (let i = 0; i < 26; i++) {
    let idx = String.fromCharCode(97 + i);
    stdin.indexOf(idx) === -1
      ? console.log(-1)
      : console.log(stdin.indexOf(idx));
  }
}
solution();
