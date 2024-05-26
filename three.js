// Problem: Given a string of digits, replace any digit below 5 with '0' and any digit 5 and above with '1'. Return the resulting string.

function fakeBin(x) {
  // Initialize an empty string to store the result
  let result = "";

  // Iterate through each digit in the input string
  for (let i = 0; i < x.length; i++) {
    // Check if the digit is less than 5
    if (parseInt(x[i]) < 5) {
      // Append '0' to the result if the digit is less than 5
      result += "0";
    } else {
      // Append '1' to the result if the digit is 5 or greater
      result += "1";
    }
  }

  return result;
}

// Testing the function
console.log(fakeBin("12345")); // Output should be "00001"
console.log(fakeBin("9876543210")); // Output should be "1111100000"

// Reflection: I iterated through each digit in the input string and replaced digits below 5 with '0' and digits 5 and above with '1'.
