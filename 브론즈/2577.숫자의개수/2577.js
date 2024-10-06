const fs = require("fs");
const input = fs.readFileSync("input.txt").toString().trim().split("\n");

const a = parseInt(input[0]);
const b = parseInt(input[1]);
const c = parseInt(input[2]);

const result = a * b * c;

const resultArray = result.toString().split("");

const count = {
  0: 0,
  1: 0,
  2: 0,
  3: 0,
  4: 0,
  5: 0,
  6: 0,
  7: 0,
  8: 0,
  9: 0,
};
resultArray.forEach((num) => {
  //0부터 9까지 숫자가 몇개씩 있는지 출력
  for (let i = 0; i < 10; i++) {
    if (num === i.toString()) {
      count[i]++;
    }
  }
});

console.log(Object.values(count).join("\n"));
