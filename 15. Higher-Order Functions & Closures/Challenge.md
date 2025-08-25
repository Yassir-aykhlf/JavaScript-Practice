### **The Challenge: The Social Media Dashboard Utilities**

#### **Part 1: User Profile Creation**

**Context:** Your first task is to create a function that populates new user profiles. The system requires a `username` and `joinDate`, but the `accountLevel` and `postCount` have standard defaults. It's critical that the original data passed to your functions is never unintentionally changed.

**Initial Data:**

```javascript
const newUser = {
  name: 'Alice',
  id: 'al123'
};
```

---

**Task 1.1: The Profile Creator**

**Objective:** Create a function `createUserProfile` that takes a `username`, `joinDate`, and optionally an `accountLevel` and `postCount`.
*   If `accountLevel` is not provided, it should default to `'basic'`.
*   If `postCount` is not provided, it should default to `0`.
*   The function should return a new object representing the user profile.
*   **Crucially, test your function by creating one user where you specify a `postCount` of `0` and another where you let it default.**

**Hint:** Think about the different ways to set default values. Does the old way of using the `||` operator have any drawbacks when a valid value might be `0`?

---

**Task 1.2: The Profile Sanitizer**

**Context:** Usernames are sometimes registered with accidental whitespace. The product team wants a utility function that logs a "sanitized" version of a user profile where the `name` property is trimmed. However, they are adamant that the original user data array must remain untouched to avoid bugs in other parts of the application.

**Objective:**
1.  Create a function `logSanitizedProfile` that takes a user profile object as an argument.
2.  Inside the function, it should change the user's name to a trimmed version (e.g., `'  Bob  '` becomes `'Bob'`).
3.  The function should then `console.log` a confirmation message, like: `Sanitized Profile for Mr. Bob`.
4.  After calling this function with the `newUser` object, `console.log` the original `newUser` object again. **Did its `name` property change?** If so, why, and how would you fix your function to prevent this "side effect"?

**Hint:** When you pass an object to a function, are you passing the object itself, or a reference to it in memory?

---

#### **Part 2: Batch User Processing**

**Context:** The dashboard needs to display a list of usernames. To keep the UI clean, you've been asked to implement two different formatting rules: one that converts a name to a single word (e.g., "Jane Doe" -> "Jane") and another that makes the entire name uppercase (e.g., "Jane Doe" -> "JANE DOE"). You need to build a reusable processor that can apply these, or any future formatting rules, to an array of user profiles.

**Initial Data:**

```javascript
const users = [
  { name: 'Peter Jones', posts: 12 },
  { name: 'Susan Smith', posts: 45 },
  { name: 'David Miller', posts: 0 }
];

// Low-level formatting rules (Callback Functions)
const toSingleWord = function(str) {
  return str.split(' ')[0];
};

const toUpperCase = function(str) {
  return str.toUpperCase();
};
```

**Objective:**
Create a single, higher-order function called `processUsernames`.
*   This function should take two arguments: the `users` array and a callback function (the formatting rule to apply).
*   It should loop through the `users` array and apply the callback function to each user's name.
*   It should return a **new array** containing only the formatted names.
*   Demonstrate its use by calling it once with the `toSingleWord` function and once with the `toUpperCase` function, logging the results each time.

**Hint:** How can you write a function that focuses on the high-level task (looping and collecting results) while delegating the low-level details (the specific formatting logic) to another function?

---

#### **Part 3: Dynamic UI Messaging**

**Context:** The UI team needs to display personalized greeting messages in different contexts. For the main dashboard, they need a message like "Welcome back, [Name]!", but for the notifications panel, they need "New content from [Name]". Instead of writing two separate functions, they want a single, configurable "greeter factory".

**Objective:**
1.  Create a function called `greeterFactory` that takes one argument: a `greeting` string (e.g., "Welcome back" or "New content from").
2.  This `greeterFactory` function should **return a new function**.
3.  The returned function should take one argument: a `name` string.
4.  When called, this inner function should log the complete, formatted message to the console (e.g., "Welcome back, Peter Jones!").
5.  Demonstrate its use:
    *   Create a `welcomeGreeter` by calling `greeterFactory` with the welcome message.
    *   Create a `notificationGreeter` by calling `greeterFactory` with the notification message.
    *   Use both of these new greeter functions to greet a user.

**Hint:** How can a function "remember" a variable from its parent's scope, even after the parent function has finished running?

***

Take your time to work through these parts. Try to solve them on your own first, and really think through the hints. When you're ready, or if you get stuck, we'll go through the solutions and I'll debrief you on the key concepts each task was designed to teach.

---

### **The Solution and Debrief**

Ready? Let's review the solutions and break down the core lessons.

#### **Solution to Part 1.1: The Profile Creator**

**Correct Code:**
```javascript
const createUserProfile = function(username, joinDate, accountLevel = 'basic', postCount = 0) {
    const userProfile = {
        username,
        joinDate,
        accountLevel,
        postCount
    };
    console.log('Profile created:', userProfile);
    return userProfile;
};

// Demonstration
createUserProfile('Alice', '2025-08-26', 'premium', 5); // All params provided
createUserProfile('Bob', '2025-08-26'); // Defaults used for level and count
createUserProfile('Charlie', '2025-08-26', undefined, 10); // Skips a default param
```

**Debrief:**
*   **Why this is correct:** This solution uses ES6 default parameters (`=`). This syntax is clean and correctly assigns the default value *only* when the argument passed is `undefined`. This correctly handles the case where a user's `postCount` is explicitly set to `0`.
*   **Common Pitfall:** You might have been tempted to use the older ES5 pattern: `postCount = postCount || 0;`. This is a subtle but significant bug. If you called the function with `postCount` as `0`, the expression `postCount || 0` would evaluate to `0`, which seems fine. However, `0` is a "falsy" value in JavaScript. This old method fails for any valid-but-falsy value (like an empty string `''`, `false`, or `0`). The ES6 `=` syntax is more precise and avoids this trap by only triggering for `undefined`.

---

#### **Solution to Part 1.2: The Profile Sanitizer**

**Correct Code:**
```javascript
const newUser = {
  name: '  Alice  ',
  id: 'al123'
};

const logSanitizedProfile = function(user) {
    // 1. Create a copy of the object to avoid modifying the original.
    const userCopy = { ...user };

    // 2. Modify the copy, not the original.
    userCopy.name = userCopy.name.trim();

    // 3. Use the modified copy.
    console.log(`Sanitized Profile for Mr. ${userCopy.name}`);
};

console.log('Original user before:', newUser); // -> { name: '  Alice  ', id: 'al123' }
logSanitizedProfile(newUser);
console.log('Original user after:', newUser); // -> { name: '  Alice  ', id: 'al123' }
```

**Debrief:**
*   **Why this is correct:** The solution uses the spread syntax (`{...user}`) to create a shallow copy of the user object. All modifications are then made to this copy, leaving the original `newUser` object untouched. This prevents unintended side effects, which is crucial for predictable code.
*   **Common Pitfall:** The most common mistake is to modify the `user` parameter directly: `user.name = user.name.trim();`. This is a classic "pass-by-reference" trap. In JavaScript, when you pass an object (or array) to a function, you are passing a reference to that object's location in memory, not a copy of the object itself. Therefore, the `user` parameter inside the function and the `newUser` variable outside the function both point to the *exact same object*. Modifying it inside the function changes it everywhere. This is a "side effect" and can lead to very unpredictable bugs in larger applications.

---

#### **Solution to Part 2: Batch User Processing**

**Correct Code:**
```javascript
const processUsernames = function(usersArray, formattingCallback) {
    const formattedNames = [];
    for (const user of usersArray) {
        formattedNames.push(formattingCallback(user.name));
    }
    return formattedNames;
};

// Demonstration
const singleWordNames = processUsernames(users, toSingleWord);
console.log(singleWordNames); // -> ['Peter', 'Susan', 'David']

const upperCaseNames = processUsernames(users, toUpperCase);
console.log(upperCaseNames); // -> ['PETER JONES', 'SUSAN SMITH', 'DAVID MILLER']
```

**Debrief:**
*   **Why this is correct:** This solution perfectly demonstrates the principle of **abstraction** by using a higher-order function. The `processUsernames` function doesn't know or care *how* the names are formatted; its only job is to manage the high-level logic (looping through the array and building a new one). It delegates the specific formatting details to the `formattingCallback` function that gets passed in. This makes `processUsernames` incredibly flexible and reusable.
*   **Common Pitfall:** A less experienced developer might write a single, rigid function like `processUsernames(users, formatType)` and use a large `if/else` or `switch` statement inside (`if (formatType === 'singleWord') { ... } else if (formatType === 'upperCase') { ... }`). This works, but it's not scalable. Every time a new formatting rule is needed, you have to modify this central function, making it brittle and harder to maintain. Using callbacks (a form of Dependency Injection) keeps the concerns separate and clean.

---

#### **Solution to Part 3: Dynamic UI Messaging**

**Correct Code:**
```javascript
const greeterFactory = function(greeting) {
    // This returns a new function
    return function(name) {
        console.log(`${greeting}, ${name}!`);
    };
};

// Create specialized functions
const welcomeGreeter = greeterFactory('Welcome back');
const notificationGreeter = greeterFactory('New content from');

// Use the specialized functions
welcomeGreeter('Peter Jones'); // -> "Welcome back, Peter Jones!"
notificationGreeter('Susan Smith'); // -> "New content from, Susan Smith!"
```

**Debrief:**
*   **Why this is correct:** `greeterFactory` is a higher-order function because it returns another function. The inner, returned function maintains access to the `greeting` variable from its parent's scope even after `greeterFactory` has finished executing. This powerful concept is called a **closure**. It allows us to create pre-configured, specialized functions on the fly. This is a very clean and common pattern in JavaScript for creating reusable and configurable code.
*   **Common Pitfall:** Learners often get confused by the two-step execution. The key is to see that the outer function is called *once* to create and configure the inner function. That new, returned function is then stored in a variable (like `welcomeGreeter`) and can be called as many times as needed, already "knowing" what its greeting should be because of its closure.