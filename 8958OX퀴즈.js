const fs = require("fs");
const stdin = fs.readFileSync("input.txt").toString().trim("");

function solution() {
  stdin
    .split("\n")
    .slice(1)
    .forEach((str) => {
      let score = 0;
      let sum = 0;
      for (let i = 0; i < str.length; i++) {
        if (str[i] === "X") {
          score = 0;
        } else {
          score += 1;
          sum += score;
        }
      }
      console.log(sum);
    });
}

solution();
