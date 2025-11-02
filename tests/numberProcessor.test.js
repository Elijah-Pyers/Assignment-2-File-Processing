/*
1. Calculate the sum of all numbers     getSum
2. Find the highest and lowest numbers    getMin / getMax
3. Calculate the average    getAverage
*/

const { getSum } = require('../Assignment-2-File-Processing/numberProcessor');
const { getMin } = require('../Assignment-2-File-Processing/numberProcessor');


//module.exports = { countWords, findMax };

//const { countWords, findMax } = require('./dataProcessor');


// **** Unit Test ****
// Test case 1
test('should count words in simple text', () => {
    const result = getMin([5, 12, 24, 30]);
    expect(result).toBe(5);
});



// Test case 2
test('should find the sum', () => {
    const result = getSum([5, 10, 3, 8]);
    expect(result).toBe(26);
});
