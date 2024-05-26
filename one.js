// Problem: Write a function to convert a name into initials. The input consists of two words with one space in between them.
// The output should be two capital letters with a dot separating them.

function initials(name) {
  // Split the name into first and last name
  const [firstName, lastName] = name.split(" ");
  // Extract the first character of each name, capitalize them, and join with a dot
  const initials = `${firstName.charAt(0).toUpperCase()}.${lastName
    .charAt(0)
    .toUpperCase()}`;
  return initials;
}

// Testing the function
console.log(initials("Sam Harris")); // Output should be "S.H"
console.log(initials("patrick feeney")); // Output should be "P.F"

// Reflection: Remember JavaScript methods like split(), charAt(), toUpperCase() for string manipulation. It's a good exercise for practicing.
