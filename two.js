function rotateMatrix(matrix) {
  // Get dimensions of the matrix
  const n = matrix.length;
  const m = matrix[0].length;

  // Initialize a new matrix to store rotated values
  const rotatedMatrix = [];

  // Iterate over columns of original matrix
  for (let col = m - 1; col >= 0; col--) {
    // Initialize a new row for the rotated matrix
    const newRow = [];
    // Iterate over rows of original matrix
    for (let row = 0; row < n; row++) {
      // Push values from original matrix into the new row of rotated matrix
      newRow.push(matrix[row][col]);
    }
    // Push the new row into rotated matrix
    rotatedMatrix.push(newRow);
  }

  return rotatedMatrix;
}

// Testing the function
const inputMatrix = [
  [-1, 4, 5],
  [2, 3, 4],
];
console.log(rotateMatrix(inputMatrix));
// Output should be [[5, 4], [4, 3], [-1, 2]]

// Reflection: The function is implemented to rotate a given matrix 90 degrees to the left.
