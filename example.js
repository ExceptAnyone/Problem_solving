const fs = require("fs");
const stdin = fs.readFileSync("input.txt").toString().trim().split("\n");

const T = +stdin[0];
const arr = stdin.slice(1).map((str) => str.split(" ").map(Number));

function solution(T, arr) {
  console.log(T, arr);
}

solution(T, arr);
