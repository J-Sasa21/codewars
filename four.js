// Problem: Given the number of blue beads, calculate the number of red beads. Two red beads are placed between every two blue beads.

function countRedBeads(n) {
  // If there are less than 2 blue beads, return 0
  if (n < 2) {
    return 0;
  }
  // Each pair of blue beads has 2 red beads in between
  // So, the number of red beads is (n - 1) * 2
  return (n - 1) * 2;
}

// Testing the function
console.log(countRedBeads(5)); // Output should be 8 (2 red beads between each pair of blue beads)

// Reflection: Solving this problem involved an arithmetic calculation.
