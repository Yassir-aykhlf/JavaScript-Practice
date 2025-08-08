### **Part 1: The Three Types of Functions**

In JavaScript, there are three primary ways to define a function. While they behave similarly, they have important syntactical and practical differences.

#### **1. Function Declaration**
This is the traditional way to define a named function.
*   **Syntax:** Uses the `function` keyword followed by the function name.
*   **Hoisting:** A key feature of declarations is that they are "hoisted." This means you can call them in your code *before* the line where they are defined.

```javascript
// Can be called before this line in the code
function calcAge1(birthYear) {
  return 2037 - birthYear;
}

const age1 = calcAge1(1991);
```

#### **2. Function Expression**
A function expression involves creating a function and assigning it to a variable. The function itself can be named, but it is often an *anonymous function* (a function without a name).
*   **Syntax:** A variable is declared and assigned a function.
*   **No Hoisting:** Unlike declarations, expressions are not hoisted. You must define them before you can call them.
*   **Functions as Values:** This syntax highlights a core JavaScript concept: **functions are values**. Just like numbers or strings, they can be stored in variables.

```javascript
const calcAge2 = function (birthYear) {
  return 2037 - birthYear;
};

const age2 = calcAge2(1991);
```

#### **3. Arrow Function (ES6)**
Arrow functions provide a more concise syntax for writing function expressions. They are always anonymous.
*   **Syntax:** Uses a "fat arrow" (`=>`) to separate the parameters from the function body.
*   **Implicit Return:** For single-line functions, the `return` keyword is not needed; the value of the expression is returned automatically.

```javascript
// Simplest form: one parameter, one line of code
const calcAge3 = birthYear => 2037 - birthYear;
const age3 = calcAge3(1991);
```

*   **Variations:**
    *   **Multiple Parameters:** Require parentheses `()` around the parameters.
        ```javascript
        const yearsUntilRetirement = (birthYear, firstName) => { ... };
        ```
    *   **Multiple Lines of Code:** Require curly braces `{}` for the function body and an explicit `return` statement.
        ```javascript
        const yearsUntilRetirement = (birthYear, firstName) => {
          const age = 2037 - birthYear;
          const retirement = 65 - age;
          return retirement;
        };
        ```
*   **Key Difference:** Arrow functions **do not get their own `this` keyword**. This is a crucial distinction that will be covered in detail later.

### **Part 2: Composing and Reviewing Functions**

#### **Functions Calling Other Functions**
A common and powerful pattern is to call one function from inside another. This promotes modularity and follows the **DRY (Don't Repeat Yourself)** principle.

*   **Example:** A `fruitProcessor` function calls a `cutFruitPieces` function to prepare the ingredients before making juice.

```javascript
function cutFruitPieces(fruit) {
  return fruit * 4;
}

function fruitProcessor(apples, oranges) {
  // Call the other function for each input
  const applePieces = cutFruitPieces(apples);
  const orangePieces = cutFruitPieces(oranges);

  const juice = `Juice with ${applePieces} pieces of apple and ${orangePieces} pieces of orange.`;
  return juice;
}

console.log(fruitProcessor(2, 3)); // Calls fruitProcessor, which in turn calls cutFruitPieces twice
```

#### **Function Review: Core Mechanics**
*   **Anatomy:** All function types share a common structure: they can receive input data (**parameters**), process it in the function **body**, and output data using a **`return`** statement.
*   **Data Flow:** When a function is called, the **arguments** (actual values) are passed to the function's **parameters** (placeholders).
*   **`return` Exits the Function:** The `return` statement immediately stops the function's execution and sends a value back. Any code written after a `return` statement within the same block will not be executed.
*   `console.log` **vs.** `return`:
    *   `console.log()` displays a value in the developer console for debugging. It does not output a value from the function itself.
    *   `return` provides the actual output value that can be captured in a variable or used by another function.

### **Part 3: Introduction to Arrays**

Arrays are the most fundamental **data structure** in JavaScript, used for storing ordered collections of data.

#### **What is an Array?**
An array is a container that holds a list of values (called elements). This avoids having to create a separate variable for every single item.

*   **Creating an Array:** The most common method is the **literal syntax**, using square brackets `[]`.

    ```javascript
    const friends = ['Michael', 'Steven', 'Peter'];
    const years = [1991, 2008, 2020];
    ```

*   **Accessing Elements:**
    *   Arrays are **zero-based**, meaning the first element is at index `0`, the second at index `1`, and so on.
    *   Use bracket notation `[index]` to get an element.

    ```javascript
    console.log(friends[0]); // -> 'Michael'
    ```

*   **`.length` Property:**
    *   This property gives you the total number of elements in the array. It is not zero-based.
    *   It's useful for finding the last element: `array[array.length - 1]`.

    ```javascript
    console.log(friends.length); // -> 3
    console.log(friends[friends.length - 1]); // -> 'Peter'
    ```

*   **Mutating Arrays:**
    *   You can change the elements of an array even if it was declared with `const`. This is because arrays are not primitive values.
    *   However, you **cannot** reassign the entire array to a new one.

    ```javascript
    friends[2] = 'Jay'; // Allowed: Mutates the original array
    // friends = ['Bob', 'Alice']; // Not allowed: Throws an error
    ```

*   **Array Contents:**
    *   An array can hold values of different types simultaneously (e.g., strings, numbers, booleans).
    *   The elements of an array can be expressions, including variables and even other function calls, as JavaScript will evaluate them and store the resulting value.

    ```javascript
    const jonas = [firstName, 'Schmedtmann', 2037 - 1991, 'teacher', friends];
    ```