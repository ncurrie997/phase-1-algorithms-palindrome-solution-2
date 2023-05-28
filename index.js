function isPalindrome(word) {
  // Write your algorithm here
  for (let startIndex = 0; startIndex < word.length / 2; startIndex++) {
    const endIndex = word.length -1 - startIndex;
    if (word[startIndex] !== word[endIndex]) {
      return false;
    }
  }

  return true;
}

/* 
  Add your pseudocode here

  step 1: get length of word
  step 2: get half length of word to determine middle letter index
  step 3: iterate over the word to see if the first and last letters match
  step 4: repeat step 3 until you reach the middle letter
  step 5: return false if any letters dont match stopping the function 
  step 6: return true if all letters match
*/

/*
  Add written explanation of your solution here

  my code takes a word and finds the length in turn finding the middle letter
  then we test the index of the first and last, second to secondlast, and so on to see if the letters match
  returns true if all letters match making the word a Palindrome and false if they dont making it not a palindrome

*/

// You can run `node index.js` to view these console logs
if (require.main === module) {
  // add your own custom tests in here
  console.log("Expecting: true");
  console.log("=>", isPalindrome("racecar"));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", isPalindrome("robot"));
}

module.exports = isPalindrome;
