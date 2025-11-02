/* In src/numberProcessor.js, create a script that reads a file containing numbers (one per line) and processes them:

Calculate the sum of all numbers
Find the highest and lowest numbers
Calculate the average
*/

// **** Part 2 ******
//number processor
/*
In src/numberProcessor.js, create a script that reads a file containing numbers (one per line) and processes them:

1. Calculate the sum of all numbers
2. Find the highest and lowest numbers
3. Calculate the average
*/

const fs = require('fs');

const content_text = fs.readFileSync('./data/sample-text.txt', 'utf8');


//C:\Application Development I Backend\Assignment-2-File-Processing\data
const scoresText = fs.readFileSync('./data/sample-numbers.txt', 'utf8');

// Convert text to array of numbers
const lines = scoresText.split('\n');
const scores = [];

for (let i = 0; i < lines.length; i++) {
    const line = lines[i].trim(); // Remove extra whitespace
    if (line.length > 0) {
      scores.push(parseFloat(line)); // Convert to number
    }
}

console.log('Scores:', scores); // Scores: [ 85, 92, 78, 96, 88, 73, 91, 87, 94, 82, 89, 76, 93, 84, 90 ]
console.log('Number of scores:', scores.length); // Number of scores: 15


function readNumbersFromFile(filePath) {
  //const raw = readTextFile(filePath);
  const raw = fs.readFileSync('./data/sample-numbers.txt', 'utf8');
  if (!raw) return [];

  return raw
    .split(/\r?\n/)
    .map((line) => line.trim())
    .filter((line) => line.length > 0)
    .map((line) => parseFloat(line))
    .filter((n) => Number.isFinite(n)); // skip lines that aren’t valid numbers
}

// Return the sum of all finite numbers in the array.
// If the array is empty or has no valid numbers, returns 0.
function getSum(nums) {
  if (!Array.isArray(nums) || nums.length === 0) return 0;
  let sum = 0;
  for (let i = 0; i < nums.length; i++) {
    const n = nums[i];
    if (Number.isFinite(n)) sum += n;
  }
  return sum;
}

// Return the smallest number or null if empty
function getMin(nums) {
  if (!Array.isArray(nums) || nums.length === 0) return null;
  let min = nums[0];
  for (let i = 1; i < nums.length; i++) {
    const n = nums[i];
    if (Number.isFinite(n) && n < min) min = n;
  }
  return min;
}

// Return the largest number or null if empty
function getMax(nums) {
  if (!Array.isArray(nums) || nums.length === 0) return null;
  let max = nums[0];
  for (let i = 1; i < nums.length; i++) {
    const n = nums[i];
    if (Number.isFinite(n) && n > max) max = n;
  }
  return max;
}

// Return the average (mean) as a number, or null if empty
function getAverage(nums) {
  if (!Array.isArray(nums) || nums.length === 0) return null;
  let sum = 0;
  let count = 0;
  for (let i = 0; i < nums.length; i++) {
    const n = nums[i];
    if (Number.isFinite(n)) {
      sum += n;
      count++;
    }
  }
  return count === 0 ? null : sum / count;
}




const scores1 = readNumbersFromFile("data/sample-numbers.txt");

console.log("Calculate the sum of all numbers", getSum(scores1));
//console.log("Find the highest and lowest numbers", getMin, getMax (scores1));
console.log({
  lowest: getMin(scores1),
  highest: getMax(scores1)
});
console.log("Calculate the average,", getAverage (scores1));



//Function available for export
module.exports = {  
  getSum,
  getMin,
  getMax,
  getAverage
};