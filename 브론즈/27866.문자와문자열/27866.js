const fs = require("fs");
const input = fs.readFileSync("input.txt").toString().trim().split("\n");

const letter = input[0];
const N = Number(input[1]);

const arr = letter.split("");

console.log(arr[N - 1]);
