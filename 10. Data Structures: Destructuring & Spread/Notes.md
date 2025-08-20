### **Notes: Modern JavaScript Data Structures & Operators**

This section builds on foundational JavaScript knowledge with a focus on modern ES6+ features. The main topics covered are powerful syntax additions for working with data structures like arrays and objects, including destructuring and the spread operator.

### **1. Destructuring**

Destructuring is an ES6 feature that allows you to "unpack" values from data structures like arrays and objects into distinct variables. It provides a highly convenient way to extract data and assign it to variables in a single, concise statement.

### **A. Array Destructuring**

This is used to retrieve elements from an array and assign them to variables based on their position.

* **Basic Unpacking:**
  The traditional way of extracting elements is repetitive. Destructuring simplifies this significantly.

  ```jsx
  // Traditional way
  const arr = [2, 3, 4];
  const a = arr[0];
  const b = arr[1];
  const c = arr[2];

  // Destructuring way
  const [x, y, z] = arr;
  console.log(x, y, z); // Output: 2 3 4

  ```

  **Note:** The original array is not modified or destroyed.

* **Skipping Elements:**
  You can skip elements in the array that you don't need by leaving a "hole" in the destructuring assignment.

  ```jsx
  const [main, , secondary] = restaurant.categories;
  console.log(main, secondary); // Output: 'Italian' 'Vegetarian' (skips 'Pizzeria')

  ```

* **Switching Variables:**
  Destructuring provides an elegant way to swap the values of two variables without needing a temporary variable.

  ```jsx
  let main = 'Italian';
  let secondary = 'Vegetarian';

  // The trick is to create a new array with the inverted order and destructure it right away
  [main, secondary] = [secondary, main];
  console.log(main, secondary); // Output: 'Vegetarian' 'Italian'

  ```

* **Receiving Multiple Return Values from a Function:**
  A function can return an array, and you can immediately destructure the result into separate variables.

  ```jsx
  // Method inside the restaurant object
  order(starterIndex, mainIndex) {
    return [this.starterMenu[starterIndex], this.mainMenu[mainIndex]];
  }

  // Calling the method and destructuring the returned array
  const [starter, mainCourse] = restaurant.order(2, 0);
  console.log(starter, mainCourse); // Output: 'Garlic Bread' 'Pizza'

  ```

* **Nested Destructuring:**
  If you have a nested array (an array within an array), you can perform destructuring inside destructuring to get the individual values.

  ```jsx
  const nested = [2, 4, [5, 6]];
  const [i, , [j, k]] = nested;
  console.log(i, j, k); // Output: 2 5 6

  ```

* **Default Values:**
  You can assign default values to variables during destructuring. This is useful when the array might have fewer elements than you expect, preventing variables from becoming `undefined`.

  ```jsx
  const [p = 1, q = 1, r = 1] = [8, 9];
  console.log(p, q, r); // Output: 8 9 1

  ```

### **B. Object Destructuring**

This is used to unpack properties from an object into variables. It is one of the most widely used and powerful features of ES6.

* **Basic Unpacking:**
  To destructure an object, you use curly braces `{}`. You must provide variable names that **exactly match the property names**.

  ```jsx
  const { name, openingHours, categories } = restaurant;
  console.log(name, openingHours, categories);

  ```

  **Key difference from arrays:** The order of variables does not matter because you are matching by property name, not by position.

* **Renaming Variables:**
  If you want your variables to have different names than the property names, you can use the colon `:` syntax.

  ```jsx
  const { name: restaurantName, openingHours: hours, categories: tags } = restaurant;
  console.log(restaurantName, hours, tags);

  ```

* **Default Values:**
  Similar to arrays, you can set default values for properties that might not exist on the object. This is extremely useful when working with data from APIs where some properties may be optional.

  ```jsx
  // 'menu' property does not exist on the restaurant object
  const { menu = [], starterMenu: starters = [] } = restaurant;
  console.log(menu, starters); // menu will be [], starters will get its actual value

  ```

* **Mutating Variables:**
  You can use destructuring to overwrite existing variables. However, if you start a line with `{`, JavaScript expects a code block. To solve this, you must wrap the entire assignment in parentheses `()`.

  ```jsx
  let a = 111;
  let b = 999;
  const obj = { a: 23, b: 7, c: 14 };

  ({ a, b } = obj); // Wrap in parentheses to mutate
  console.log(a, b); // Output: 23 7

  ```

* **Nested Object Destructuring:**
  To get data from a nested object, you use a nested destructuring pattern.

  ```jsx
  // Get the open and close times for Friday
  const { fri: { open: o, close: c } } = openingHours;
  console.log(o, c); // Output: 11 23

  ```

* **Practical Application: Function Parameters**
  A very powerful technique is to pass a single object as an argument to a function and then destructure that object immediately in the function's parameter list. This has two main advantages:

  1. The order of arguments doesn't matter.
  2. It's easy to set default values for parameters.

  ```jsx
  // Method that accepts an object of options
  orderDelivery({ starterIndex = 1, mainIndex = 0, time = '20:00', address }) {
    console.log(`Order received! ${this.starterMenu[starterIndex]} and ${this.mainMenu[mainIndex]} will be delivered to ${address} at ${time}`);
  }

  // Call the method with an object. Order of properties doesn't matter.
  restaurant.orderDelivery({
    address: 'Via del Sole, 21',
    starterIndex: 2,
  });
  // Output uses default values for time and mainIndex

  ```

---

### **2. The Spread Operator (`...`)**

The spread operator also unpacks elements but does so in a different context than destructuring. It takes all elements from an iterable (like an array) and expands them into a comma-separated list of values.

* **Where to Use It:** The spread operator can be used in places where you would otherwise write multiple values separated by commas, primarily:

  1. When building a new array literal `[...arr]`.
  2. When passing arguments to a function `myFunction(...arr)`.

* **Creating New Arrays:** It's a great way to create a new array based on an existing one.

  ```jsx
  const arr = [7, 8, 9];
  const newArr = [1, 2, ...arr]; // [1, 2, 7, 8, 9]

  ```

* **Creating Shallow Copies:** It provides an easy way to make a shallow copy of an array.

  ```jsx
  const mainMenuCopy = [...restaurant.mainMenu];

  ```

* **Merging Arrays:** You can easily join two or more arrays.

  ```jsx
  const menu = [...restaurant.starterMenu, ...restaurant.mainMenu];

  ```

* **Works on All Iterables:** The spread operator works on all iterables in JavaScript, including **arrays, strings, maps, and sets** (but not objects before ES2018).

  ```jsx
  const str = 'Jonas';
  const letters = [...str, ' ', 'S.']; // ['J', 'o', 'n', 'a', 's', ' ', 'S.']

  ```

* **Spread Operator on Objects (ES2018+):**
  Since 2018, the spread operator also works on objects. It is now the preferred way to create shallow copies or merge objects.

  ```jsx
  // Create a shallow copy
  const restaurantCopy = { ...restaurant };

  // Add new properties while copying
  const newRestaurant = { founder: 'Giuseppe', ...restaurant, foundedIn: 1998 };

  ```
