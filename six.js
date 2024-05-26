function sumMix(x) {
  let sum = 0;
  // Iterate through each element of the array
  for (let i = 0; i < x.length; i++) {
    // Convert each element to a number and add it to the sum
    sum += Number(x[i]);
  }
  return sum;
}

// Testing the function
console.log(sumMix([1, 2, "3", "4"])); // Output should be 10 (1 + 2 + 3 + 4 = 10)

// Reflection:Summing up the elements after converting them to numbers.
