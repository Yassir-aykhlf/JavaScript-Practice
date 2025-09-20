### The Challenge: Debug and Refactor the User Profile

You are given a JavaScript code snippet that defines a `userProfile` object. The code is messy, uses outdated practices, and is full of bugs related to the concepts you learned today.

Your mission is to:
1.  **Analyze and Predict:** Read through the entire code block *without running it*. For each `// Task` comment, predict the output or the specific error that will occur.
2.  **Debug and Explain:** Fix all the bugs in the code. For each correction, add a comment explaining *why* the bug occurred and *how* your fix solves it, referencing the specific JavaScript concept (e.g., "lexical this", "block scope", "hoisting", "TDZ").
3.  **Refactor for Best Practices:** After fixing the bugs, refactor the code to follow modern JavaScript best practices discussed in the lectures.

---

### The Code Snippet

Copy this code into your editor.

```javascript
'use strict';

// -------------------- START OF CHALLENGE CODE --------------------

// Task 1.1: Predict what this will log to the console.
console.log('My favorite food is ' + food);

// Task 1.2: Predict what this function call will return. Will it work?
console.log(calculateAge(1990));

const userProfile = {
  firstName: 'Alex',
  year: 1990,

  // Task 1.3: Analyze this method. What is the bug inside of it?
  getProfileInfo: function() {
    console.log(this); // What is 'this' here?

    const getAge = function() {
      // Task 1.4: What is 'this' inside this nested function? Why?
      const currentYear = 2025;
      return currentYear - this.year;
    };

    return `${this.firstName} is ${getAge()} years old.`;
  },

  // Task 1.5: Predict the output of this greet method.
  greet: () => {
    console.log(this); // What is 'this' in the arrow function?
    console.log(`Hello from ${this.firstName}`);
  },
};

var food = 'Pizza';

function calculateAge(birthYear) {
  const age = 2025 - birthYear;

  if (age >= 30) {
    // Task 1.6: Is 'message' accessible outside this block? Why?
    let message = 'You are in your 30s or older!';
  }
  
  // Task 1.7: Will this line of code work? Explain.
  console.log(message);

  return age;
}


// Function expression
var getJob = function() {
  return 'Developer';
};

// Task 1.8: Will this function call work here? Why or why not?
console.log(`My job is: ${getJob()}`);


// --- Calling the methods ---
// Task 1.9: Predict the final output or error from this line.
console.log(userProfile.getProfileInfo());

// Task 1.10: Predict the final output from this line.
userProfile.greet();


// -------------------- END OF CHALLENGE CODE --------------------
```

---

### Your Tasks

#### **Part 1: Analysis and Prediction (On Paper or in Comments)**

Before you change anything, write down your predictions for each task from `1.1` to `1.10`. What will be the exact output? If there's an error, what kind of error will it be (`ReferenceError`, `TypeError`, etc.)?

#### **Part 2: Debugging and Explaining**

Now, run the code and see how your predictions held up. Your main task is to fix the code so that it runs without errors and produces the logical, intended output.

**Expected Final Output (after fixing):**
```
My favorite food is undefined
35
// (the 'this' log from getProfileInfo) -> should be userProfile object
// (the 'this' log from greet) -> should be the global window object
Alex is 35 years old.
Hello from undefined
My job is: Developer
```

For every change you make, add a comment explaining the "why".

*   **Example Fix:**
    ```javascript
    // FIX: Changed the nested getAge to an arrow function.
    // EXPLANATION: A regular function call gets its own 'this' which is 'undefined' in strict mode.
    // An arrow function inherits the 'this' from its parent scope (getProfileInfo), where 'this' correctly refers to the userProfile object.
    const getAge = () => { ... };
    ```

#### **Part 3: Refactoring for Best Practices**

Once the code is working, clean it up.
1.  Replace all `var` declarations with `let` or `const` where appropriate.
2.  Ensure all variables are declared at the top of their respective scopes for better readability.
3.  Rewrite the `greet` method using a regular function expression to make it work as intended (it should greet using the `firstName` from the object).

Good luck! This challenge directly applies the core concepts of how the JavaScript engine handles scope, context, and declarations.