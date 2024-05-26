// Problem: Given a non-negative integer, return a string with a murmur counting sheep.
// For example, if the input is 3, the output should be "1 sheep...2 sheep...3 sheep...".

function countSheep(num) {
  let murmur = "";
  for (let i = 1; i <= num; i++) {
    murmur += `${i} sheep...`;
  }
  return murmur;
}

// Testing the function
console.log(countSheep(3)); // Output should be "1 sheep...2 sheep...3 sheep..."

// Reflection: I iterated through numbers from 1 to the given non-negative integer, concatenating each number with 'sheep...' to form the string.
