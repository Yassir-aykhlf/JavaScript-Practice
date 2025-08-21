### **JavaScript: Modern Operators and Features**

These notes cover modern JavaScript features including the Rest Pattern and Parameters, Short-Circuiting with logical operators, the Nullish Coalescing Operator, and Logical Assignment Operators, concluding with a practical coding challenge.

### **1. Rest Pattern and Parameters**

The rest pattern and rest parameters use the same `...` syntax as the spread operator but have the opposite effect. While the spread operator unpacks elements from an array, the rest pattern packs elements into an array.

**Key distinctions:**
*   **Spread Operator:** Used on the right side of the assignment operator (`=`) to expand an array into individual elements.
*   **Rest Pattern:** Used on the left side of the assignment operator (`=`) in destructuring to collect the remaining elements into a new array.

**Use in Destructuring:**
The rest pattern is particularly useful in destructuring assignments to capture a variable number of elements.

*   **Arrays:** It collects the rest of the elements in an array that are not picked by other variables in the destructuring assignment. It must always be the last element in the destructuring assignment, and there can only be one rest element.
    *   **Example:** `const [a, b, ...others] = [1, 2, 3, 4, 5];` will result in `a` being `1`, `b` being `2`, and `others` being `[3, 4, 5]`.
*   **Objects:** It gathers the remaining properties of an object into a new object.
    *   **Example:** `const { sat, ...weekdays } = { sat: 'Saturday', fri: 'Friday', thu: 'Thursday' };` will result in `sat` being `'Saturday'` and `weekdays` being `{ fri: 'Friday', thu: 'Thursday' }`.

**Rest Parameters in Functions:**
Rest parameters allow a function to accept an indefinite number of arguments as an array. This is useful for functions that need to handle a variable number of inputs.

*   **Syntax:** `function functionName(...parameters) { ... }`
*   **Example:** A function to add numbers can be defined as `function add(...numbers) { ... }`, which can then be called with any number of arguments like `add(2, 3)` or `add(5, 3, 7, 2)`.

### **2. Short-Circuiting with Logical Operators (`&&` and `||`)**

Logical operators in JavaScript can be used with any data type and will return any data type, not just booleans. They also exhibit a behavior called short-circuiting.

*   **OR (`||`) Operator:** Returns the first *truthy* value it encounters, or the last value if all are falsy. If the first operand is truthy, the subsequent operands are not evaluated.
    *   **Use Case:** Setting default values. For instance, `const guests = restaurant.numGuests || 10;` sets `guests` to `restaurant.numGuests` if it's a truthy value, otherwise it defaults to `10`.
*   **AND (`&&`) Operator:** Returns the first *falsy* value it encounters, or the last value if all are truthy. If the first operand is falsy, the rest are not evaluated.
    *   **Use Case:** Executing code conditionally. For example, `restaurant.orderPizza && restaurant.orderPizza('mushrooms', 'spinach');` will only call the `orderPizza` method if it exists (is truthy).

### **3. The Nullish Coalescing Operator (`??`)**

Introduced in ES2020, the nullish coalescing operator is a logical operator that returns its right-hand side operand when the left-hand side operand is `null` or `undefined`, and otherwise returns its left-hand side operand.

*   **Key Concept:** It works with *nullish* values (`null` and `undefined`) instead of *falsy* values (which also include `0`, `''`, `false`, and `NaN`).
*   **Advantage:** This is particularly useful for setting default values when `0` or an empty string are valid inputs that should be preserved.
    *   **Example:** `const guests = restaurant.numGuests ?? 10;` will correctly assign `0` to `guests` if `restaurant.numGuests` is `0`, and only default to `10` if `restaurant.numGuests` is `null` or `undefined`.

### **4. Logical Assignment Operators**

Introduced in ES2021, these operators combine logical operations with assignment.

*   **Logical OR Assignment (`||=`):** Assigns the right-hand value to the left-hand variable only if the left-hand variable is falsy.
    *   **Example:** `rest.numGuests ||= 10;` is equivalent to `rest.numGuests = rest.numGuests || 10;`.
*   **Nullish Coalescing Assignment (`??=`):** Assigns the right-hand value to the left-hand variable only if the left-hand variable is nullish (`null` or `undefined`).
    *   **Example:** `rest.numGuests ??= 10;` is equivalent to `rest.numGuests = rest.numGuests ?? 10;`.
*   **Logical AND Assignment (`&&=`):** Assigns the right-hand value to the left-hand variable only if the left-hand variable is truthy.
    *   **Example:** `rest.owner &&= '<ANONYMOUS>';` is equivalent to `rest.owner = rest.owner && '<ANONYMOUS>';`.