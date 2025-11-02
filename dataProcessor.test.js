
//Import functions to test

//import { getSum } from 'numberProcessor.js'; // include .js extension in ESM
// ...
//console.log('Sum of scores:', getSum(scores));

console.log('Resolved numberProcessor:', require.resolve('../Assignment-2-File-Processing/numberProcessor'));

try {
  // TEMP: Path sanity check
  console.log('Resolved numberProcessor:', require.resolve('../Assignment-2-File-Processing/numberProcessor'));
} catch (e) {
  console.error('Resolve failed:', e.message);
}


console.log('Resolved textAnalyzer:', require.resolve('../Assignment-2-File-Processing/textAnalyzer'));

try {
  // TEMP: Path sanity check
  console.log('Resolved textAnalyzer:', require.resolve('../Assignment-2-File-Processing/textAnalyzer'));
} catch (e) {
  console.error('Resolve failed:', e.message);
}



const { getSum } = require('../Assignment-2-File-Processing/numberProcessor');
const { countWords } = require('../Assignment-2-File-Processing/textAnalyzer');


//module.exports = { countWords, findMax };

//const { countWords, findMax } = require('./dataProcessor');


// **** Unit Test ****
// Test case 1
test('should count words in simple text', () => {
    const result = countWords('Hello world test Elijah');
    expect(result).toBe(4);
});



// Test case 2
test('should find the sum', () => {
    const result = getSum([5, 10, 3, 8]);
    expect(result).toBe(26);
});


