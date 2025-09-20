// -------------------- Part 2: Debugging and Explaining ---------
'use strict';

// FIX: moved the variable up
var food = 'Pizza';

console.log('My favorite food is ' + food);

console.log(calculateAge(1990));

const userProfile = {
  firstName: 'Alex',
  year: 1990,

  getProfileInfo: function() {
    console.log(this);

	// Fix: turning getAge into and arrow function
	//		yes, what is different this time is that the arrow function is inside a method
	//		meaning it INHERITS the this keyword from getProfileInfo which points to userProfile
    const getAge = () => {
      const currentYear = 2025;
      return currentYear - this.year;
    };

    return `${this.firstName} is ${getAge()} years old.`;
  },

  // Fix: changed greet from an arrow function to a method of the object userProfile
  greet: function() {
    console.log(this);
    console.log(`Hello from ${this.firstName}`);
  },
};


function calculateAge(birthYear) {
  const age = 2025 - birthYear;
  //Fix: moved the variable message outside the if block scope, and initialized it 
  let message = `You're age is below 30`;
  
  if (age >= 30) {
    message = 'You are in your 30s or older!';
  }
  
  console.log(message);

  return age;
}

var getJob = function() {
  return 'Developer';
};

console.log(`My job is: ${getJob()}`);

console.log(userProfile.getProfileInfo());

userProfile.greet();