function isPalindrome(word) {
  word.trim();
  let wordArr = word.split('');
  let revArr = [];
  for(let element of wordArr){
    revArr.unshift(element)
  };
  let wordStr = wordArr.join('');
  let revStr = revArr.join('');
  if(wordStr.toLowerCase() === revStr.toLowerCase()){
    return true
  } else {return false};
}

/* 
 The plan is to generally
  1) create a new array with the letter isolated: .trim() and .split()
  2) create a new array with the elements reversed: create a map-like function that populates in reverse order
  3) rejoin the arrays into string: .join()
  4) compare the resulting strings: 
*/

/*

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
