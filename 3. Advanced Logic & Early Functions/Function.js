// Defining the function with parameters
function fruitProcessor(apples, oranges) {
  const juice = `Juice with ${apples} apples and ${oranges} oranges.`;
  return juice; // Returning the result
}

// Calling the function with arguments and capturing the returned value
const appleJuice = fruitProcessor(5, 0);
console.log(appleJuice); // Logs: "Juice with 5 apples and 0 oranges."