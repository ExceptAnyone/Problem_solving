const fs = require('fs');

const input = fs.readFileSync('./input.txt').toString().split('\n');

const totalParticipants = Number(input[0]);

const sizes = input[1].split(' ').map(Number);

const orderNumbers = input[2].split(' ').map(Number);
const [tShirtsBundle, penBundle] = orderNumbers;

function tSolution() {
  let results = [];
  sizes.forEach((size) => {
    const bundles = Math.ceil(size / tShirtsBundle);
    results.push(bundles);
  });
  return results;
}

const results = tSolution();

const T = results.reduce((acc, cur) => {
  return acc + cur;
}, 0);
console.log(T); //티셔츠 묶음 수

function pSolution() {
  const maximumPenBundles = Math.floor(totalParticipants / penBundle);
  const onePenBundles = Math.floor(totalParticipants % penBundle);
  return [maximumPenBundles, onePenBundles];
}

const [maximumPenBundles, onePenBundles] = pSolution();
console.log(maximumPenBundles, onePenBundles);
