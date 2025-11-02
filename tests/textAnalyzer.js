/*
Step 5
In src/textAnalyzer.js script that reads a text file and analyzes it. Create functions that do the following:

1. Count the total number of words
2. Find the longest word
3. Count how many lines the file has
*/

// Read the entire file as text

const fs = require('fs');

const content_text = fs.readFileSync('./data/sample-text.txt', 'utf8');

// 1. Count the total number of words
//Text Analyzer

// Count total number of words
// - We treat a "word" as a run of letters/numbers/apostrophes (e.g., don't, O'Connor)
// - If there are no matches, return 0
function countWords(text) {
  const matches = text.match(/[A-Za-z0-9']+/g);
  return matches ? matches.length : 0;
}

//Split into an array whenever there is a line break in the file 
//const lines2 = content.split('\n');
// Split into lines to show first/last (like your original)
//const lines = textContent.length ? textContent.split(/\r?\n/) : [];



// 2. // Find the single longest word in the text
// - If tie, returns the first longest encountered
// - Returns "" if text has no words
function findLongestWord(text) {
  const matches = text.match(/[A-Za-z0-9']+/g);
  if (!matches || matches.length === 0) return "";
  let longest = matches[0];
  for (let i = 1; i < matches.length; i++) {
    if (matches[i].length > longest.length) {
      longest = matches[i];
    }
  }
  return longest;
}

// 3.  Count how many lines are in the text (handles \n and \r\n)
function countLines(text) {
  if (text.length === 0) return 0;
  return text.split(/\r?\n/).length;
}



// Analyze the data main for text analyzer
console.log('Count the total number of words:', countWords(content_text));
console.log('Find the longest word:', findLongestWord (content_text));
console.log('Count how many lines the file has', countLines(content_text));


//Function available for export
module.exports = {  
  countWords,
  findLongestWord,
  countLines
};

