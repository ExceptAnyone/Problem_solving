const fs = require('fs');
const stdin = fs
  .readFileSync('input.txt')
  .toString()
  .trim()
  .split('\n')
  .map(Number);

function solution() {
  let results = '';
  let blank = '';
  for (let i = 1; i <= stdin[0]; i++) {
    results += '*';
    for (let j = 0; j < stdin[0] - i; j++) {
      blank += ' ';
    }
    console.log(blank + results);
    blank = '';
  }
}

solution();
