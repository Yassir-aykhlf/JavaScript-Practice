### **The Challenge: E-commerce Store Management**

You've been hired to build and refactor parts of an inventory and order management system for a new e-commerce store. You'll work with product data, user settings, and order processing logic, using modern JS features to make the code clean, efficient, and robust.

---

### **Part 1: Inventory Setup (Difficulty: Easy)**

This part focuses on foundational data structuring using the spread operator and rest pattern.

**Initial Data:**

```javascript
const products = [
  { id: 'p1', name: 'Wireless Mouse', price: 29.99, category: 'Electronics' },
  { id: 'p2', name: 'Mechanical Keyboard', price: 89.99, category: 'Electronics' },
  { id: 'p3', name: 'USB-C Hub', price: 34.50, category: 'Accessories' },
  { id: 'p4', name: 'Laptop Stand', price: 45.00, category: 'Accessories' },
  { id: 'p5', name: 'Ergonomic Chair', price: 249.99, category: 'Furniture' }
];

const newArrivals = [
  { id: 'p6', name: '4K Monitor', price: 399.99, category: 'Electronics' },
  { id: 'p7', name: 'Desk Pad', price: 19.99, category: 'Accessories' }
];
```

**Your Tasks:**

1.  **Separate Featured Product:**
    The first product in the `products` array is always the "featured product". Use array destructuring and the rest pattern to create a variable `featuredProduct` holding the first product, and an array `otherProducts` holding the rest.
    *   *Concept Tested: Array Destructuring, Rest Pattern.*

2.  **Combine Inventories:**
    Create a new array `fullInventory` that contains all the items from both the `products` and `newArrivals` arrays.
    *   *Concept Tested: Spread Operator.*

3.  **Create a Product Logging Function:**
    Write a function `logProductInfo` that accepts any number of product objects as arguments. The function should log the name of each product and the total number of products received.
    *   *Concept Tested: Rest Parameters.*
    *   **Test Data:** Call it once with `products[0]` and `products[2]`. Call it again with all the `newArrivals`.

---

### **Part 2: Handling Data & Defaults (Difficulty: Medium)**

This part deals with incomplete data, requiring you to use short-circuiting and the nullish coalescing operator to set defaults correctly.

**Initial Data:**

```javascript
const productDetails = [
  { id: 'pd1', name: 'Webcam', stock: 15, rating: 4.5 },
  { id: 'pd2', name: 'LED Strip', stock: 0, rating: 4.0 },
  { id: 'pd3', name: 'Standing Desk', rating: 4.8 }, // stock is missing
  { id: 'pd4', name: 'Noise-Cancelling Headphones', stock: null, rating: 5.0 } // stock is null
];
```

**Your Tasks:**

4.  **Set a Default Product Review:**
    Write a function `getProductReview` that takes a product object. It should return the product's `rating` if it exists, otherwise, it should return a default string `'No reviews yet'`. Use a logical operator to achieve this in a single line.
    *   *Concept Tested: OR (`||`) Short-Circuiting.*

5.  **Display Correct Stock Levels:**
    The store wants to display "Out of Stock" if a product's `stock` is `0`, but "Contact for availability" if the stock is `null` or `undefined`. A `stock` of `0` is a valid, important value. Write a function `displayStockInfo` that takes a product object and returns the correct stock number. If the stock is nullish, it should default to the string `'Contact for availability'`.
    *   *Concept Tested: Nullish Coalescing Operator (`??`).*

6.  **Conditionally Execute a Promotion:**
    Write a function `runPromotion` that takes a product object. The function should only log a promotional message (`"Special offer on ${product.name}!"`) *if* the product's `rating` is 4.5 or higher. Use the AND (`&&`) short-circuiting behavior to execute the `console.log` conditionally.
    *   *Concept Tested: AND (`&&`) Short-Circuiting.*

---

### **Part 3: Advanced Processing & Refactoring (Difficulty: Hard)**

This final part challenges you to write concise, modern code using logical assignment operators to modify objects and process data.

**Initial Data:**

```javascript
const userSettings = {
  username: 'AdminUser',
  theme: null, // User hasn't set a theme
  showNotifications: false
};

const order = {
  orderId: 'ORD123',
  items: ['p1', 'p3'],
  status: 'Pending', // Initial status
  assignedCourier: 'CourierX'
};
```

**Your Tasks:**

7.  **Apply Default User Settings:**
    Refactor the `userSettings` object in place. If the `theme` is nullish, assign it the value `'light'`. Use the nullish coalescing assignment operator.
    *   *Concept Tested: Nullish Coalescing Assignment (`??=`).*

8.  **Update Order Status (The Tricky One):**
    Imagine a rule: if an order's `status` is `'Pending'`, and it has more than 3 items, its `status` should be updated to `'Awaiting Confirmation'`. The current `order` has 2 items. Write a single line of code that would perform this check and update. Your code should *not* change the status of the current `order` but *would* change it if `items` had 4 elements. *Hint: A truthy value on the left side of `&&=` will be assigned the value from the right side.*
    *   *Concept Tested: Logical AND Assignment (`&&=`).*

9.  **Anonymize Courier Information:**
    The company has a privacy policy: if a courier has been assigned (`assignedCourier` has a truthy value), but the order status is *not* `'Shipped'`, the `assignedCourier` property should be changed to `'Unconfirmed'` for privacy reasons before displaying it to the user. Modify the `order` object using a logical assignment operator to achieve this.
    *   *Concept Tested: Logical AND Assignment (`&&=`) or Logical OR Assignment (`||=`) in a creative way.*

---

### **Bonus Challenge (Difficulty: Expert)**

You need to create a function `finalizeOrder(order, user)` that takes an order object and a user settings object. The function should:
1.  Use destructuring to pull `status` and `orderId` from the `order`.
2.  Use the rest pattern to gather all other order properties into an `orderDetails` object.
3.  Use the nullish coalescing operator to get the `user.username`, but default to `'Guest'` if it's not available.
4.  Use short-circuiting to log a "PRIORITY ALERT" message *only if* the order's `status` is `'Awaiting Confirmation'` AND the user's `showNotifications` setting is `true`. (Be careful: `showNotifications` can be `false`!)
5.  Return a final confirmation string: `"[PRIORITY ALERT] Order ORD123 for Guest is now Awaiting Confirmation."` or just `"Order ORD123 for AdminUser is now Pending."` depending on the logic.

This final task requires you to elegantly combine multiple concepts from the entire lesson. Good luck!