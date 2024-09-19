const fs = require("fs");
const stdin = fs.readFileSync("input.txt").toString().trim().split("\n");

const arr = stdin.slice(0).map((str) => str.split(" ").map(Number));

function solution() {
  const total = arr.map(Number).reduce((acc, cur) => acc + cur, 0);
  for (let i = 0; i < arr.length; i++) {
    for (let j = i + 1; j < arr.length; j++) {
      if (total - arr[i] - arr[j] === 100) {
        arr.splice(arr.indexOf(arr[j]), 1);
        arr.splice(arr.indexOf(arr[i]), 1);
        arr.sort((a, b) => a - b);
        console.log(arr.join("\n"));
        return;
      }
    }
  }
}
solution();
