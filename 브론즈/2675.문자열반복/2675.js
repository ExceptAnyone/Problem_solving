const fs = require('fs');
const input = fs.readFileSync('input.txt').toString().split('\n');

const T = input[0]; //테스트 케이스 갯수

for (let i = 1; i <= T; i++) {
  const [R, S] = input[i].split(' ');
  let result = '';
  for (let j = 0; j < S.length; j++) {
    result += S[j].repeat(R);
  }
  console.log(result);
}
