const fs = require("fs");
const stdin = fs.readFileSync("input.txt").toString().trim().split("\n");
const N = Number(stdin.map(Number).join("")); //216
function solution() {
  let result = [];
  for (let i = 1; i < N; i++) {
    let sum = 0;
    const sumArr = i.toString().split("").map(Number);
    for (let j = 0; j < sumArr.length; j++) {
      sum += sumArr[j];
    }
    sum += i;
    if (sum === N) {
      result.push(i);
    }
  }
  if (result.length === 0) {
    console.log(0);
  } else {
    console.log(Math.min(...result));
  }
}

solution();
