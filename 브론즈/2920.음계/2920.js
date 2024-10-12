const fs = require("fs");

const input = fs
  .readFileSync("input.txt")
  .toString()
  .trim()
  .split(" ")
  .map(Number);

const sortedAscending = [...input].sort((a, b) => a - b);
const sortedDescending = [...input].sort((a, b) => b - a);

if (input.join("") === sortedAscending.join("")) {
  console.log("ascending");
} else if (input.join("") === sortedDescending.join("")) {
  console.log("descending");
} else {
  console.log("mixed");
}
