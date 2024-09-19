const fs = require("fs");
let [len, ...input] = fs
  .readFileSync("input.txt")
  .toString()
  .trim()
  .split("\n")
  .map((v) => v.split(""));
len = +len.join(""); //3
let MAX = candyCount(input);
checkRow();
checkColumn();

function candyCount(arr) {
  let MAX = 0;
  for (let i = 0; i < len; i++) {
    let count = 0;
    let value = arr[i][0];
    for (let j = 0; j < len; j++) {
      if (arr[i][j] === value) {
        count++;
      } else {
        MAX = Math.max(MAX, count);
        count = 1;
        value = arr[i][j];
      }
      if (j === len - 1) MAX = Math.max(MAX, count);
    }
  }

  for (let i = 0; i < len; i++) {
    let count = 0;
    let value = arr[0][i];
    for (let j = 0; j < len; j++) {
      if (arr[j][i] === value) {
        count++;
      } else {
        MAX = Math.max(MAX, count);
        count = 1;
        value = arr[j][i];
      }
      if (j === len - 1) MAX = Math.max(MAX, count);
    }
  }
  return MAX;
}

function checkRow() {
  for (let i = 0; i < len; i++) {
    for (let j = 0; j < len - 1; j++) {
      if (input[i][j] !== input[i][j + 1]) {
        [input[i][j], input[i][j + 1]] = [input[i][j + 1], input[i][j]];
        MAX = Math.max(MAX, candyCount(input));
        [input[i][j + 1], input[i][j]] = [input[i][j], input[i][j + 1]];
      }
    }
  }
}

function checkColumn() {
  for (let i = 0; i < len - 1; i++) {
    for (let j = 0; j < len; j++) {
      if (input[i][j] !== input[i + 1][j]) {
        [input[i][j], input[i + 1][j]] = [input[i + 1][j], input[i][j]];
        MAX = Math.max(MAX, candyCount(input));
        [input[i + 1][j], input[i][j]] = [input[i][j], input[i + 1][j]];
      }
    }
  }
}

console.log(MAX);
