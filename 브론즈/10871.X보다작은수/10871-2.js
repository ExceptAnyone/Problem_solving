const fs = require('fs');
const stdin = fs.readFileSync('input.txt').toString().split('\n');

const x = stdin[0].split(' ').map(Number)[1];

const sequence = stdin[1].split(' ').map(Number);

const answer = sequence.filter((number) => number < x).join(' ');

console.log(answer);
