// -------------------- Part 3 - Refactoring --------------------
'use strict';

// FIX: changed var to const
const food = 'Pizza';

// FIX: moved function declarations up
function calculateAge(birthYear) {
  const age = 2025 - birthYear;
  let message = `You're age is below 30`;
  
  if (age >= 30) {
    message = 'You are in your 30s or older!';
  }
  
  console.log(message);

  return age;
}

// Fix: changed var to const
const getJob = function() {
  return 'Developer';
};

// Fix: moved the object userProfile up
const userProfile = {
  firstName: 'Alex',
  year: 1990,

  getProfileInfo: function() {
    console.log(this);

	// BEST PRACTICE: Use an arrow function for nested functions to inherit 'this'
    const getAge = () => {
      const currentYear = 2025;
      return currentYear - this.year;
    };
    return `${this.firstName} is ${getAge()} years old.`;
  },

  greet: function() {
    console.log(this);
    console.log(`Hello from ${this.firstName}`);
  },
};

console.log('My favorite food is ' + food);
console.log(calculateAge(1990));
console.log(`My job is: ${getJob()}`);
console.log(userProfile.getProfileInfo());

userProfile.greet();