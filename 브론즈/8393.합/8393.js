const fs = require('fs');
const input = fs.readFileSync('./input.txt').toString().split('\n');

const n = Number(input[0]);

function factorial(n) {
  return n > 0 ? n + factorial(n - 1) : 0;
}

console.log(factorial(n));
