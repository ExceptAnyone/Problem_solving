const fs = require("fs");
const input = fs.readFileSync("input.txt").toString().trim();

for (let i = 1; i <= input; i++) {
  console.log(i);
}
