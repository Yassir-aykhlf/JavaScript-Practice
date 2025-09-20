### **Part 1: Arrays with Methods**

Arrays in JavaScript come with built-in functions called **methods**, which are essentially tools or operations you can perform directly on an array.

#### **1. Methods for Adding Elements**

These methods *mutate* (change) the original array.

*   **`.push(element)`**: Adds an element to the **end** of the array.
    *   **Returns:** The new length of the array.
    ```javascript
    const friends = ['Michael', 'Steven'];
    const newLength = friends.push('Jay'); // friends is now ['Michael', 'Steven', 'Jay']
    console.log(newLength); // 3
    ```
*   **`.unshift(element)`**: Adds an element to the **beginning** of the array.
    *   **Returns:** The new length of the array.
    ```javascript
    friends.unshift('John'); // friends is now ['John', 'Michael', 'Steven', 'Jay']
    ```

#### **2. Methods for Removing Elements**

These methods also mutate the original array.

*   **`.pop()`**: Removes the **last** element of the array.
    *   **Returns:** The removed element.
    ```javascript
    const popped = friends.pop(); // friends is now ['John', 'Michael', 'Steven']
    console.log(popped); // 'Jay'
    ```
*   **`.shift()`**: Removes the **first** element of the array.
    *   **Returns:** The removed element.
    ```javascript
    friends.shift(); // friends is now ['Michael', 'Steven']
    ```

#### **3. Methods for Finding Elements**

*   **`.indexOf(element)`**: Returns the index (position) of an element.
    *   **Returns:** `-1` if the element is not found.
    ```javascript
    console.log(friends.indexOf('Steven')); // 1
    console.log(friends.indexOf('Bob'));    // -1
    ```
*   **`.includes(element)` (ES6 Method)**: Checks if an element exists in the array.
    *   **Returns:** A boolean (`true` or `false`).
    *   **Important:** It uses **strict equality (`===`)**, meaning it does not perform type coercion (e.g., `23` is not the same as `"23"`).
    *   This is extremely useful for writing conditionals.
    ```javascript
    if (friends.includes('Steven')) {
      console.log('You have a friend called Steven');
    }
    ```

#### **4. Key Patterns from Challenges**
*   **Creating a New Array from an Old One:** A common pattern is to loop through an array, perform a calculation on each element, and store the results in a new array.
    ```javascript
    const bills = [125, 555, 44];
    const tips = [
      calcTip(bills[0]),
      calcTip(bills[1]),
      calcTip(bills[2])
    ];
    ```
*   **No Direct Math on Arrays:** You cannot perform mathematical operations on an entire array at once (e.g., `bills + tips` will not work as expected). You must operate on the individual elements.

---

### **Part 2: Introduction to Objects**

Objects are the second fundamental data structure in JavaScript. They are used to store collections of data using **key-value pairs**, which is ideal for unstructured data.

*   **Arrays vs. Objects:**
    *   **Arrays:** Use for **ordered** data where you access elements by their numerical index.
    *   **Objects:** Use for **unstructured** data where you access elements by a meaningful name (the key). The order of properties does not matter.

*   **Object Literal Syntax:** The most common way to create an object is with curly braces `{}`.
    *   Each piece of data is a **property**, which consists of a **key** (like a variable name) and a **value**.
    *   Properties are separated by commas.

    ```javascript
    const jonas = {
      firstName: 'Jonas',
      lastName: 'Schmedtmann',
      birthYear: 1991,
      job: 'teacher',
      friends: ['Michael', 'Peter', 'Steven'] // Values can be any type, including arrays
    };
    ```

#### **3. Accessing and Modifying Object Properties**

*   **Dot Notation:** The direct and most common way.
    ```javascript
    console.log(jonas.lastName); // 'Schmedtmann'
    ```
*   **Bracket Notation:** More versatile, as you can put any **expression** inside the brackets.
    ```javascript
    console.log(jonas['lastName']); // 'Schmedtmann'

    // Example with an expression
    const nameKey = 'Name';
    console.log(jonas['first' + nameKey]); // 'Jonas'
    ```
*   **When to Use Which:**
    *   Use **Dot Notation** by default. It's cleaner and easier to read.
    *   Use **Bracket Notation** when you need to compute the property name from a variable or expression (e.g., getting user input).

*   **Adding New Properties:** You can use either notation to add new properties to an object.
    ```javascript
    jonas.location = 'Portugal';
    jonas['twitter'] = '@jonasschmedtman';
    ```

#### **4. Object Methods and the `this` Keyword**

*   **Methods:** A method is a **function that is a property of an object**.
    ```javascript
    const jonas = {
      // ... other properties
      calcAge: function(birthYear) { // 'calcAge' is a method
        return 2037 - birthYear;
      }
    };
    ```

*   **The `this` Keyword:** This is a special variable that is created inside a method.
    *   **Definition:** `this` points to the **object that is calling the method**.
    *   **Benefit:** It allows a method to access other properties from the *same object* without hardcoding the object's name. This makes the code more reusable and robust.

    ```javascript
    const mark = {
      mass: 78,
      height: 1.69,
      calcBMI: function() {
        // 'this' refers to the 'mark' object
        this.bmi = this.mass / this.height ** 2; // Creates a new property 'bmi' on the object
        return this.bmi;
      }
    };

    mark.calcBMI(); // When this runs, 'this' inside the method is 'mark'
    console.log(mark.bmi); // Now accessible as a property
    ```

*   **Key Insight:** Array methods like `.push()` and `.pop()` work because arrays are technically a special kind of object, so they can have methods attached to them too.