//Write a function, isItLetter or is_it_letter or IsItLetter, which tells us if a given character is a letter or not.

function isItLetter(char) {
  // Using regular expression to test if the character is a letter
  return /^[a-zA-Z]$/.test(char);
}

// Testing the function
console.log(isItLetter("a")); // Output should be true
console.log(isItLetter("9")); // Output should be false

// Reflection: This function uses a regular expression to check if the given character is a letter.
// The regular expression /^[a-zA-Z]$/ matches any single letter from a to z.
