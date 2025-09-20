'use strict';

// -------------------- START OF CHALLENGE CODE --------------------

// Task 1.1: Predict what this will log to the console.
console.log('My favorite food is ' + food);
//PREDICTION:	My favorite food is undefined
//REASONING:	var food is hoisted to the top of its scope, food exists now, BUT it is in the TDZ
//				its initial value is 'undefined', until later it becomes 'Pizza' 

// Task 1.2: Predict what this function call will return. Will it work?
console.log(calculateAge(1990));
//PREDICTION:	the function will crash before returning 35
//				because message being declared with let is Block-scoped
//				for console.log(message); message does not exist, resulting a RefrenceError

const userProfile = {
  firstName: 'Alex',
  year: 1990,

  // Task 1.3: Analyze this method. What is the bug inside of it?
  // ANSWER: the bug is that there is an arrow function used as method
  //		 which is wrong since arrow functions get lexical 'this'
  getProfileInfo: function() {
    console.log(this); // What is 'this' here? // ANSWER: the object userProfile

    const getAge = function() {
      // Task 1.4: What is 'this' inside this nested function? Why?
	  // ANSWER:	'this' is undefined, because getAge is regular function
	  //			it gets its own 'this' keyword.
	  //			since it is a simple function, 'this' is undefined in strict mode.
	  // 			causing TypeError for the operation this.year 
      const currentYear = 2025;
      return currentYear - this.year;
    };

    return `${this.firstName} is ${getAge()} years old.`;
  },

  // Task 1.5: Predict the output of this greet method.
  // ANSWER:	the window object	 // REASON: greet is an Arrow function, so it uses lexical 'this'
  //								 //			the userProfile object literal {...} does not create a scope
  //								 //			so the parent scope is the global scope where 'this' is window
  //			Hello from undefined //	REASON: this.firstName is window.firstName, firstName is not defined in window. 
  greet: () => {
    console.log(this); // What is 'this' in the arrow function? // ANSWER: window
    console.log(`Hello from ${this.firstName}`);
  },
};

var food = 'Pizza';

function calculateAge(birthYear) {
  const age = 2025 - birthYear;

  if (age >= 30) {
    // Task 1.6: Is 'message' accessible outside this block? Why?
	// ANSWER: No because variables declared using 'let' are "Block scopped" in ES6
    let message = 'You are in your 30s or older!';
  }
  
  // Task 1.7: Will this line of code work? Explain.
  // ANSWER: No because message does not exist, resulting a ReferenceError
  console.log(message);

  return age;
}


// Function expression
var getJob = function() {
  return 'Developer';
};

// Task 1.8: Will this function call work here? Why or why not?
// ANSWER: yes because the function expression is already defined and assigned to getJob before it's called
console.log(`My job is: ${getJob()}`);


// --- Calling the methods ---
// Task 1.9: Predict the final output or error from this line.
// ANSWER:	 the code crashes from the TypeError caused by the failed operation 'this.year'
console.log(userProfile.getProfileInfo());

// Task 1.10: Predict the final output from this line.
// ANSWER:	the window object
//			Hello from undefined
userProfile.greet();


// -------------------- END OF CHALLENGE CODE --------------------
