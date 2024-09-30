const fs = require("fs");
const input = fs.readFileSync("input.txt").toString().trim().split("\n");

const numbers = input[1].split(" ").map(Number);

console.log(Math.min(...numbers), Math.max(...numbers));
