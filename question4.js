const num1 = 10;
const num2 = 25;

// Ensure num1 is less than num2
if (num1 > num2) {
  console.log("num1 must be less than num2.");
} 
else {
  // Iterate through the range and print each number
  for (let i = num1 + 1; i <= num2; i++) {
    console.log(i);
  }
}
