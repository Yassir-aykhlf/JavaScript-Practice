greet('Alice'); // "Hello, Alice!"
farewell('Bob'); // Uncaught ReferenceError: farewell is not defined

//Function declaration
function greet(name) {
	return `Hello, ${name}!`;
}

//Function expression
const farewell = function(name) {
	return `Goodbye, ${name}!`;
};

// Function hoisting example
console.log(add(5, 3)); // 8
function add(a, b) {
	return a + b;
}
///////////////////////////////////////////////////////////////////////////////////
// Function with parameters and return value

function fruitProcessor(apples, oranges) {
  const juice = `Juice with ${apples} apples and ${oranges} oranges.`;
  return juice; // Returning the result
}
// Calling the function with arguments and capturing the returned value
const appleJuice = fruitProcessor(5, 0);
console.log(appleJuice); // Logs: "Juice with 5 apples and 0 oranges."

///////////////////////////////////////////////////////////////////////////////////
// Arrow function

const multiply = (x, y) => x * y;
console.log(multiply(4, 2)); // 8

// Single parameter (parentheses optional)
const square = x => x * x;
console.log(square(5)); // 25

// No parameters (parentheses required)
const getRandomNumber = () => Math.floor(Math.random() * 100);
console.log(getRandomNumber()); // Random number between 0-99

// Multiple lines with explicit return
const calculateArea = (length, width) => {
  const area = length * width;
  console.log(`Calculating area of ${length} x ${width}`);
  return area;
};
console.log(calculateArea(10, 5)); // 50

// Arrow function with object return (parentheses needed)
const createPerson = (name, age) => ({
  name: name,
  age: age,
  greet: function() {
    return `Hi, I'm ${this.name} and I'm ${this.age} years old.`;
  }
});
const person = createPerson('John', 30);
console.log(person.greet()); // "Hi, I'm John and I'm 30 years old."

