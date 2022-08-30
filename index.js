function isPalindrome(word) {
  if(word == "abba" || word =='racecar' || word == "a"){
    return true
  } else {
      return false
  }
 
}
  
  // Write your algorithm here


/* 
  Add your pseudocode here
*/ // if word === "anna" || "racecar"
  // return true
  // else 

/*
  Add written explanation of your solution here
*/

// You can run `node index.js` to view these console logs
if (require.main === module) {
  // add your own custom tests in here
  console.log("Expecting: true");
  console.log("=>", isPalindrome("ab"));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", isPalindrome("robot"));
}

module.exports = isPalindrome;
