### **Part 1: The Core Concept of Loops**

Loops are a fundamental control structure in programming that allow you to **automate repetitive tasks**. They help you follow the **DRY (Don't Repeat Yourself)** principle by executing a block of code multiple times without having to write it multiple times.

*   **Analogy:** Instead of writing `console.log('Lifting weights repetition 1')`, `...repetition 2`, etc., a loop does it for you.

---

### **Part 2: The `for` Loop**

The `for` loop is the most common loop in JavaScript. It is ideal when you know **how many times** you want the loop to run. It consists of three parts, all defined in one line.

*   **Syntax:** `for (initialization; condition; increment) { ... }`
    1.  **Initialization:** A counter variable is created and initialized. This runs only once at the very beginning (e.g., `let i = 0`).
    2.  **Condition:** A logical condition that is evaluated **before** each iteration. The loop will continue to run as long as this condition is `true` (e.g., `i < array.length`).
    3.  **Increment:** An action performed **after** each iteration, typically to update the counter (e.g., `i++`).

*   **Example: Weightlifting Reps**
    ```javascript
    for (let rep = 1; rep <= 10; rep++) {
      console.log(`Lifting weights repetition ${rep}`);
    }
    ```

#### **Practical `for` Loop Applications**

*   **1. Looping Through Arrays (Most Common Use Case):**
    *   The counter (`i`) is used as the index to access each element of the array dynamically.
    *   The loop starts at `i = 0` because arrays are zero-indexed.
    *   The condition should use the array's `.length` property to stay dynamic and avoid hardcoding values.

    ```javascript
    const jonas = ['Jonas', 'Schmedtmann', 46, 'teacher', ['Michael', 'Peter']];

    // Looping through and logging each element
    for (let i = 0; i < jonas.length; i++) {
      console.log(jonas[i], typeof jonas[i]);
    }
    ```

*   **2. Creating a New Array Based on an Existing One:**
    *   **Pattern:**
        1.  Create an empty array outside the loop (e.g., `const ages = [];`).
        2.  Loop over the source array.
        3.  In each iteration, calculate a new value.
        4.  Use the `.push()` method to add the new value to the empty array.

    ```javascript
    const years = [1991, 2007, 1969, 2020];
    const ages = [];

    for (let i = 0; i < years.length; i++) {
      ages.push(2037 - years[i]);
    }
    console.log(ages); // [46, 30, 68, 17]
    ```

*   **3. Loop Control Statements: `continue` and `break`**
    *   **`continue`**: Exits the *current iteration* of the loop and immediately proceeds to the next one. It's useful for skipping elements that meet a certain condition.
        ```javascript
        // Only log elements that are strings
        for (let i = 0; i < jonas.length; i++) {
          if (typeof jonas[i] !== 'string') continue; // Skip if not a string
          console.log(jonas[i]);
        }
        ```
    *   **`break`**: **Terminates the entire loop** immediately. It's useful for stopping the loop once a specific condition has been met.
        ```javascript
        // Stop the loop as soon as a number is found
        for (let i = 0; i < jonas.length; i++) {
          if (typeof jonas[i] === 'number') break; // Terminate the loop
          console.log(jonas[i]);
        }
        ```

*   **4. Advanced Patterns:**
    *   **Looping Backwards:** You can reverse the loop by adjusting the three parts.
        ```javascript
        // Starts at the last index and decreases the counter
        for (let i = jonas.length - 1; i >= 0; i--) {
          console.log(jonas[i]);
        }
        ```
    *   **Nested Loops (Loop inside a Loop):** For every single iteration of the outer loop, the inner loop completes all of its iterations.
        ```javascript
        for (let exercise = 1; exercise <= 3; exercise++) {
          console.log(`--- Starting exercise ${exercise}`);
          for (let rep = 1; rep <= 5; rep++) {
            console.log(`Lifting weights repetition ${rep}`);
          }
        }
        ```

---

### **Part 3: The `while` Loop**

The `while` loop is more versatile because it runs based only on a condition, without a built-in counter structure.

*   **Syntax:** `while (condition) { ... }`
*   **Key Use Case:** Use a `while` loop when you **do not know in advance how many iterations the loop will have**.
*   **Important:** You must manually handle the counter (if needed) and ensure the condition eventually becomes `false` to avoid an **infinite loop**.

*   **Example: Rolling a Dice Until a 6 is Rolled**
    ```javascript
    let dice = Math.trunc(Math.random() * 6) + 1;

    while (dice !== 6) {
      console.log(`You rolled a ${dice}`);
      // Re-roll the dice; this update is crucial to eventually end the loop
      dice = Math.trunc(Math.random() * 6) + 1;
      if (dice === 6) console.log('Loop is about to end...');
    }
    ```